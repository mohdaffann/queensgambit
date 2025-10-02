import React, { use, useEffect, useState } from "react";
import { useSocket } from "./SocketProvider";
import ChessboardWrapper from "./ChessboardWrapper";
import { useNavigate, useLocation } from 'react-router'
function Lobby() {
    const socket = useSocket();
    const nav = useNavigate();
    const location = useLocation();
    const [lobby, setLobby] = useState('lobby');
    const [roomId, setRoomId] = useState(null);
    const [roomError, setRoomError] = useState(null);
    const [playerColor, setPlayerColor] = useState(null);
    const [roomIdInput, setRoomIdInput] = useState('')
    const [anonymousRooms, setAnonymusRooms] = useState([]);
    const [gameMode, setGameMode] = useState('rapid');
    const [isComputer, setIsComputer] = useState(false);
    const createRoom = () => {
        socket.emit('createRoom', gameMode)
    }
    const joinRoom = () => {
        socket.emit('joinRoom', roomIdInput);
    }
    useEffect(() => {
        if (!socket) return;
        if (location.state?.startComputerGame) {
            socket.emit('computerGame');
            setIsComputer(true);
        }
        socket.on('roomCreated', ({ roomId, color }) => {
            setRoomId(roomId);
            setPlayerColor(color)
            console.log(roomId);
        })
        socket.emit('getWaitingList')
        socket.on('invalidRoomId', () => {
            setRoomError('Invalid room Id')
        })
        socket.on('waitingForPlayer', () => {
            setLobby('waiting')
        })
        socket.on('gameReady', () => {
            setLobby('play')
        })
        socket.on('roomFull', () => {
            setRoomError('The room is full!')
        })

        socket.on('roomJoined', ({ roomId, color }) => {
            setRoomId(roomId);
            setPlayerColor(color);
        })
        socket.on('updatedWaitingList', (list) => {
            const filteredList = list.filter((room) => room.name !== socket.id)
            setAnonymusRooms(filteredList);
        })
        socket.on('creatorIsSecondPlayer', () => {
            setRoomError('The creator of the room cannot join as second player!')
        })

        socket.on('computerGameCreated', ({ roomID, color }) => {
            setRoomId(roomID);
            setPlayerColor(color);
            setIsComputer(true);
            setLobby('play')
        })

        return () => {
            socket.off('roomCreated');
            socket.off('invalidRoomId');
            socket.off('waitingForPlayer');
            socket.off('gameReady');
            socket.off('fullRoom');
            socket.off('gameOver')
            socket.off('updatedWaitingList')
            if (socket) {
                socket.emit('leaveWaitList')
            }

        }
    }, [socket, location.state?.startComputerGame])

    useEffect(() => {
        if (lobby === 'play' && roomId) {
            nav(`/playGame/${roomId}`, { state: { playerColor, isComputer } })
        }
    }, [lobby, roomId, playerColor, nav, isComputer])
    return (
        <div className="w-full h-screen flex  flex-col items-center justify-start pt-[80px]">
            <div className="bg-gray-600 px-8 py-6 mb-7  w-full max-w-[400px] md:max-w-2xl mx-auto rounded-lg">
                <h1 className="text-white font-bold text-[30px] text-center md:text-2xl mb-4">Quick Join</h1>
                {anonymousRooms && anonymousRooms.length > 0 ? (
                    <div className=" flex flex-col gap-3">
                        {anonymousRooms.map((room, ind) => (
                            <button className="w-full flex items-center justify-between text-left cursor-pointer text-white bg-gray-700 px-4 py-3 rounded-lg border border-gray-500 hover:bg-gray-500 transition-colors duration-200" key={ind} onClick={() => {
                                socket.emit('joinRoom', room.value)
                            }}>
                                <span>{room.name}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-300 mt-2 text-center">No rooms available right now.</p>
                )}
            </div>

            {
                lobby === 'lobby' && (
                    <div>
                        <div>

                            <div className="flex items-center flex-col md:flex-row gap-3 ">
                                <button className={`flex items-center justify-center rounded-lg px-4 py-2 transition duration-200 text-black ease-in-out cursor-pointer ${gameMode === 'rapid'
                                    ? 'bg-yellow-300 '
                                    : 'bg-white  hover:bg-yellow-200'
                                    }`}
                                    onClick={() => setGameMode('rapid')}
                                >
                                    <img src="/rapid.png" alt="" className="w-7" />
                                    <span className="text-[25px]">Rapid Chess (10+0)</span>
                                </button>
                                <button className={`flex items-center  justify-center rounded-lg px-4 py-2 transition duration-200 text-black ease-in-out cursor-pointer ${gameMode === 'blitz' ? ' bg-yellow-300' : 'bg-white hover:bg-yellow-200'}`}
                                    onClick={() => setGameMode('blitz')}
                                >
                                    <img src="/blitz.png" alt="" className="w-7" />
                                    <span className="text-[25px]">Blitz Chess (5+0)</span>
                                </button>
                                <button className={`flex items-center rounded-lg px-4 py-2 transition duration-200 text-black ease-in-out cursor-pointer ${gameMode === 'bullet' ? ' bg-yellow-300' : 'bg-white hover:bg-yellow-200'}`}
                                    onClick={() => setGameMode('bullet')}
                                >
                                    <img src="/bullet.png" alt="" className="w-7" />
                                    <span className="text-[25px]">Bullet Chess (1+0)</span>
                                </button>
                            </div>
                            <div className="flex items-center flex-col md:flex-row  justify-center mt-3 gap-2">
                                <button onClick={createRoom} className="px-4 py-2 text-[25px] bg-white rounded-lg text-black transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200">Create Room</button>
                                {roomId && <input type="text" readOnly={true} value={roomId} className="text-black bg-white w-[320px] ml-2 p-3" />}
                            </div>
                            <p className="text-center text-white text-[25px] mt-3">(OR)</p>
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-center mt-3 ">
                                <input type="text" className="text-black bg-white p-3 " onChange={(e) => setRoomIdInput(e.target.value)} value={roomIdInput} />
                                <button onClick={joinRoom} className="px-4 py-2 text-[25px] bg-white rounded-lg text-black transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200">Join Room</button>
                            </div>
                            <div className="flex items-center justify-center">
                                {roomError && <p className="text-red-600 text-[22px]">{roomError}</p>}
                            </div>
                        </div>
                    </div>
                )
            }




        </div>



    )
}

export default Lobby;
