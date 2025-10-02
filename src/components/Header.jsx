import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { X, Menu } from 'lucide-react';
import { useSocket } from "./SocketProvider";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const socket = useSocket();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        if (!socket) return;
        const handleEmit = () => {
            socket.emit('leaveGame');
        }
        window.addEventListener('beforeunload', handleEmit);
        return () => {
            window.removeEventListener('beforeunload', handleEmit)
        }
    }, [socket])

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-none bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex  items-center py-4">

                    {/* Logo */}
                    <div className="flex items-center ml-6">
                        <NavLink to="/" className="text-2xl font-bold text-white" onClick={() => socket.emit('leaveGame')}>
                            ♛ QueensGambit
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                        <NavLink onClick={() => socket.emit('leaveGame')}
                            to="/lobby"
                            className={({ isActive }) =>
                                `text-white hover:text-yellow-400 transition-colors duration-200 ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                                }`
                            }
                        >
                            Lobby
                        </NavLink>
                        <NavLink onClick={() => socket.emit('leaveGame')}
                            to="/guide"
                            className={({ isActive }) =>
                                `text-white hover:text-yellow-400 transition-colors duration-200 ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                                }`
                            }
                        >
                            Guide
                        </NavLink>
                        <NavLink
                            to="/about" onClick={(e) => {
                                socket.emit('leaveGame')
                            }}
                            className={({ isActive }) =>
                                `text-white hover:text-yellow-400 transition-colors duration-200 ${isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-yellow-400 transition-colors duration-200 ml-auto
                        +"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-70 rounded-lg mt-2">
                            <NavLink
                                to="/lobby"
                                className={({ isActive }) =>
                                    `block px-3 py-2 text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200 ${isActive ? 'text-yellow-400 bg-white bg-opacity-10' : ''
                                    }`
                                }
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    socket.emit('leaveGame')
                                }}
                            >
                                Lobby
                            </NavLink>
                            <NavLink
                                to="/guide"
                                className={({ isActive }) =>
                                    `block px-3 py-2 text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200 ${isActive ? 'text-yellow-400 bg-white bg-opacity-10' : ''
                                    }`
                                }
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    socket.emit('leaveGame');
                                }
                                }
                            >
                                Guide
                            </NavLink>
                            <NavLink
                                to="/about"

                                className={({ isActive }) =>
                                    `block px-3 py-2 text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200 ${isActive ? 'text-yellow-400 bg-white bg-opacity-10' : ''
                                    }`
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false)
                                    socket.emit('leaveGame')
                                }
                                }
                            >
                                About
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;