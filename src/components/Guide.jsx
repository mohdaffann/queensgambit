import React from "react";

function Guide() {
    const guide = [
        {
            title: 'How to Join a game',
            para: 'At first to join a game you need an already created game . If you created a game there will be a room id appearing below it . Send that id to a friend and make them paste the id in join room input box . Better just create a game and the other players in lobby can quick join without the hastle of copy pasting the ids.'
        },
        {
            title: 'Move History',
            para: 'When playing a game , on every move you get updated moves below . Those moves are called pgn format text which is chess notations . Copy those after game is finished and paste the text on chess.com or lichess.org analysis board to get chess engine analysis'
        },
    ];
    return (
        <section className="w-full mt-9 px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-5xl mx-auto grid gap-10 md:gap-16">
                {guide.map((item, ind) => (
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

export default Guide;
