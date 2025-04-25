"use client"

import React, { useState, useEffect } from "react"
import { Logo } from "@/components/ui/Logo"

const messages = [
    {
        description: "I don't stop when I'm tired, I stop when I'm done.",
        author: "David Goggins",
    },
    {
        description:
            'A focused fool can accomplish more than a distracted genius.',
        author: "Alex Hormozi",
    },
    {
        description:
            "Your time is limited. Don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        description: 'Your most valuable asset - your attention.',
        author: "Alex Hormozi",
    },
    {
        description:
            'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
        author: "Dead Poets Society",
    },
    {
        description:
            'It does not matter how slowly you go as long as you do not stop.',
        author: "Confucius",
    },
    {
        description:
            'Never give up, for that is just the place and time that the tide will turn.',
        author: "Harriet Beecher Stowe",
    },
    {
        description: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        description:
            'The successful warrior is the average man, with laser-like focus.',
        author: "Bruce Lee",
    },
    {
        description:
            'I am not a product of my circumstances. I am a product of my decisions.',
        author: "Stephen R. Covey",
    },
    {
        description:
            "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus.",
        author: "Alexander Graham Bell",
    },
    {
        description:
            'The main thing is to keep the main thing the main thing.',
        author: "Stephen Covey",
    },
    {
        description: 'Where focus goes, energy flows.',
        author: "Tony Robbins",
    },
    {
        description:
            'The difference between successful people and very successful people is that very successful people say no to almost everything.',
        author: "Warren Buffett",
    },
    {
        description:
            'It is during our darkest moments that we must focus to see the light.',
        author: "Aristotle",
    },
    {
        description: 'Focus is a force multiplier on work.',
        author: "Sam Altman",
    },
    {
        description:
            'People spend too much time doing and not enough time thinking about what they should be doing.',
        author: "Naval Ravikant",
    },
]

export default function VibesPage() {
    const [randomMessage, setRandomMessage] = useState(messages[0])

    useEffect(() => {
        setRandomMessage(messages[Math.floor(Math.random() * messages.length)])
    }, [])

    return (
        <main 
            className="flex min-h-screen w-full items-center justify-center bg-gray-950 text-white font-sans p-8"
        >
            <div className="flex flex-col items-center justify-center gap-6 text-center max-w-xl">
                <Logo width={60} height={45} className="mb-6 text-violet-100" />
                <div className="w-32 h-px bg-white/20 mb-8" />
                <p className="text-lg italic opacity-90 leading-relaxed mb-2">
                    {randomMessage.description}
                </p>
                <p className="text-base font-medium opacity-70">
                    — {randomMessage.author}
                </p>
            </div>
        </main>
    )
} 