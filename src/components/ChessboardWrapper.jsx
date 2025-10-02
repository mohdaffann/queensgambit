import React, { useState, useRef, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useSocket } from "./SocketProvider";
function ChessboardWrapper({ roomId, playerColor, isComputerGame }) {
    const gameRef = useRef(new Chess());
    const [errorsEmitted, setErrorsEmitted] = useState(null)
    const [position, setPosition] = useState(gameRef.current.fen());
    const socket = useSocket();
    const onPieceDrop = ({ sourceSquare, targetSquare }) => {
        if (isComputerGame) {
            socket.emit('botMove', {
                roomId,
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q'
            })
        } else {
            socket.emit('move', {
                roomId,
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q'
            })
        }
        return true;

    };
    useEffect(() => {
        if (!socket) return;
        socket.on('pieceMoved', (fen) => {
            gameRef.current.load(fen);
            setPosition(fen)

        })

        return () => {
            socket.off('pieceMoved')
        }
    }, [socket])

    const boardOptions = {
        position,
        onPieceDrop,
        boardWidth: 500,
        arePiecesDraggable: true,
        autoPromoteToQueen: true,
        boardOrientation: playerColor
    };

    return (
        <div className="max-w-[500px]">
            <Chessboard options={boardOptions} />

        </div>
    );
}

export default ChessboardWrapper;
