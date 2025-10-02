import React from "react";

function About() {
    const AboutSec = [
        {
            title: 'Tech Used',
            para: 'NodeJS , WebSockets(socket.io) , ReactJs , ExpressJs , React-router'
        },
        {
            title: 'Seperate game instance for each room',
            para: 'Used Maps in the backend extensively for every room which holds roomID as key and chessjs , whitePlayer , blackPlayer playerColour , gameMode and other configs as value'
        },
        {
            title: 'Best Feature',
            para: 'No login or signups required , just jump in create game or join an existing one and play the game'
        },
        {
            title: 'Complex Feature',
            para: 'Cresting three different game modes and maintaining the setTntervals for each room with less latency of timerUpdation'
        }
    ];
    return (
        <section className="w-full mt-9 px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-5xl mx-auto grid gap-10 md:gap-16">
                {AboutSec.map((item, ind) => (
                    <div className="flex flex-col" key={ind}>
                        <h1 className="text-gray-200 text-2xl md:text-3xl font-semibold mb-4">{item.title}</h1>
                        <div className="space-y-2 max-w-3xl">
                            {item.para.split('. ').map((para, ind) => (
                                <p key={ind} className="text-gray-400 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default About;
