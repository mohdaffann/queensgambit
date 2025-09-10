import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const newSoc = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000');
        setSocket(newSoc)
        return () => {
            newSoc.disconnect();
        }
    }, [])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
export const useSocket = () => useContext(SocketContext);