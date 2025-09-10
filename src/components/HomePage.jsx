import React from "react";
import { motion } from 'framer-motion'
import { NavLink } from 'react-router'
function HomePage() {
    const features = [{
        image: '/anonymously.jpg',
        heading: 'Play Anonymously',
        para: 'Jump into instant chess matches without the need for registration or personal details. Our anonymous play feature connects you with opponents worldwide through randomly generated room IDs . No usernames, no profiles, just pure chess strategy in a secure environment. Experience the freedom of playing chess without any digital footprint or commitment.'
    },
    {
        image: '/clock.png',
        heading: 'Game Mode',
        para: 'Choose your perfect chess tempo with our three exciting time controls designed for every playing style. Rapid games (10 minutes chess) offer deep strategic thinking and careful position evaluation. Blitz matches (5 minutes chess) provide the perfect balance of speed and tactics. Bullet games (1 minute chess) deliver lightning-fast, adrenaline-pumping chess action that tests your instincts and pattern recognition.'
    },
    {
        image: '/realtimechess.jpg',
        heading: 'Real-time Chess',
        para: 'Experience seamless, instantaneous gameplay powered by advanced Socket.IO technology that ensures zero lag between moves. Every piece movement, capture, and check is synchronized perfectly across all connected devices in real-time. Watch your opponent moves appear instantly on your board while your own moves are transmitted without delay. Enjoy the authentic feel of over-the-board chess from anywhere in the world.'
    },
    {
        image: '/scoresheet.jpeg',
        heading: 'Move History',
        para: 'Keep track of every move with our comprehensive game notation system that displays your complete match history. Review your games move-by-move to analyze critical positions, missed opportunities, and brilliant tactical sequences. The clean, organized format makes it easy to study your playing patterns and learn from both victories and defeats. Perfect for post-game analysis and improving your chess understanding.'
    }
    ];

    return (
        <div className="w-full ">
            <div className="w-full h-screen  overflow-hidden relative ">
                <img src="/chessboard.jpg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute flex-col inset-0 flex justify-center md:top-72 md:left-16 md:justify-start px-4 md:px-0">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold
                     bg-gradient-to-r from-white via-gray-500 to-gray-700 bg-clip-text text-transparent
                     "
                    >QueensGambit</h1>
                    <p className="text-white max-w-[280px] sm:max-w-lg md:max-w-2xl italic mt-3 text-[18px] md:text-base">"A chess app built on top of socket.io , to play Rapid , Blitz and Bullet chess anonymously"</p>
                </div>
                <div className="absolute top-[520px] mt-4 left-3 md:top-96 md:left-30 flex gap-4">
                    <NavLink
                        to={'/lobby'}
                        className="rounded cursor-pointer    px-8 font-semibold py-2 focus:bg-gray-300 focus:text-gray-900 active:bg-gray-300 active:text-gray-900 text-gray-300 border border-gray-300 transition duration-200 ease-in-out hover:bg-gray-300 hover:text-gray-900 ">Lobby</NavLink>
                    <NavLink
                        to={'/guide'}
                        className="rounded   cursor-pointer  px-8 font-semibold py-2 focus:bg-gray-300 focus:text-gray-900 active:bg-gray-300 active:text-gray-900 text-gray-300 border border-gray-300 transition duration-200 ease-in-out hover:bg-gray-300 hover:text-gray-900 ">Guide</NavLink>

                </div>
            </div>
            <h1 className="text-center font-bold text-white text-3xl md:text-4xl mt-3 mb-5">Features</h1>
            <div className="flex flex-col  items-center justify-center gap-8 px-10 mb-6">
                {features.map((item, ind) => (
                    <motion.div key={ind} className="flex flex-col md:flex-row items-center gap-3 md:gap-3 w-full max-w-5xl"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}

                    >
                        <div className="w-full md:w-1/2">
                            <h1 className="text-white mb-4 font-bold text-[25px]">{item.heading}</h1>
                            <img src={item.image} className="w-full object-cover max-w-[450px] min-h-[200px] sm:min-h-[250px]" />
                        </div>
                        <div className="w-full md:w-1/2 mt-10">
                            {item.para.split('.').map((item, ind) => (
                                <p key={ind} className="text-gray-300 text-base md:text-lg mt-3">{item}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>

    )
}

export default HomePage;
