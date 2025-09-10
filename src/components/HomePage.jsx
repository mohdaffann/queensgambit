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
    const openGit = () => {
        window.open('https://github.com/mohdaffann', '_blank')
    }
    const openLin = () => {
        window.open('https://www.linkedin.com/in/muhammad-affan-anass/', '_blank')
    }
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
            <div className="border-t border-gray-300 flex items-center justify-center gap-3 mb-8 mt-3">
                <span className="text-base text-gray-300 mt-4">Made by Muhammad Affan</span>
                <div className="flex items-center justify-center gap-3 mt-4">
                    <button className="flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
                        aria-label="Github Profile"
                        onClick={openGit}
                    >
                        <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF" className="h-6 w-6" alt="" />
                    </button>
                    <button className="flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
                        aria-label="Linkedin Profile"
                        onClick={openLin}
                    >
                        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default HomePage;
