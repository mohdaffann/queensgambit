import React from "react";
import ChessboardWrapper from "./ChessboardWrapper";
import { useSocket } from "./SocketProvider";
import { useParams, useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
function Game() {
    const { roomId } = useParams()
    const [whiteTime, setWhiteTime] = useState(0);
    const loc = useLocation();
    const playerColor = loc.state?.playerColor;
    const isComputer = loc.state?.isComputer;
    const [pgn, setPgn] = useState('');
    const [gameOver, setGameOver] = useState(null);
    const socket = useSocket();
    const [blackTime, setBlackTime] = useState(0);
    const formatTime = (milliSecs) => {
        const min = Math.floor(milliSecs / 60000);
        const sec = Math.floor((milliSecs % 60000) / 1000);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }
    const criticalWhiteTime = Math.floor(whiteTime / 1000) <= 10;
    const criticalBlackTime = Math.floor(blackTime / 1000) <= 10;

    useEffect(() => {
        if (!socket) return;
        socket.on('timerUpdate', ({ white, black }) => {
            setWhiteTime(white);
            setBlackTime(black);
        })
        socket.on('gameOver', ({ reason, winner }) => {
            setGameOver({ reason, winner })
        })
        socket.on('moves', (pgn) => {
            setPgn(pgn);
        })
        return () => {
            socket.off('timerUpdate')
        }
    }, [socket])
    return (
        <div className="w-full  flex flex-col sm:flex-row    justify-center mt-16 p-4 md:pt-9">
            <div>
                <div className="flex justify-center items-center t">
                    <h1 className="text-xl mb-5 md:mb-2  text-gray-300">Drag the piece to make a move!</h1>
                </div>
                {!isComputer &&
                    <div className="flex justify-start max-w-[100px]  text-lg md:text-xl font-bold px-4 md:px-6 py-2 bg-gray-700 ">
                        {playerColor === 'white' ? (
                            <span className={`${criticalBlackTime ? 'text-red-600' : 'text-white'}`}>{formatTime(blackTime)}</span>
                        ) : (
                            <span className={`${criticalWhiteTime ? 'text-red-600' : 'text-white'}`}>{formatTime(whiteTime)}</span>
                        )}
                    </div>
                }

                <div className="relative flex-shrink-0">
                    <ChessboardWrapper roomId={roomId} playerColor={playerColor} isComputerGame={isComputer} />
                    {gameOver && (
                        <div className="bg-none bg-opacity-100 backdrop-blur-[3px]  flex items-center justify-center z-10 absolute inset-0">
                            <div className="flex flex-col">
                                <h2 className="text-black px-2 py-2 bg-gray-200 text-center underline text-[30px] text-2xl font-bold mb-2">Game Over!</h2>
                                <div className="flex flex-col gap-2">
                                    <span className="text-black px-2 py-2 bg-gray-200 font-semibold text-[25px]">Reason : {gameOver.reason}</span>
                                    <span className="text-black px-2 py-2 bg-gray-300 font-semibold text-[25px]">Winner : {gameOver.winner}</span>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                {!isComputer &&
                    <div className="flex justify-start max-w-[100px] text-lg md:text-xl font-bold px-4 md:px-6 py-2 bg-gray-700 ">
                        {playerColor === 'black' ? (
                            <span className={`${criticalBlackTime ? 'text-red-600' : 'text-white'}`}>{formatTime(blackTime)}</span>
                        ) : (
                            <span className={`${criticalWhiteTime ? 'text-red-600' : 'text-white'}`}>{formatTime(whiteTime)}</span>
                        )}
                    </div>
                }

            </div>
            <div className="ml-4 mt-12">
                <h1 className="font-bold text-xl text-white text-center mb-2">Moves</h1>
                <pre className="whitespace-pre-wrap text-white text-[18px] font-mono">{pgn}</pre>

            </div>

        </div>

    )
}

export default Game;
