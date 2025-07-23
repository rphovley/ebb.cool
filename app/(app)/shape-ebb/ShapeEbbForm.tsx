"use client"
import { useEffect } from "react"
import { Header } from "@/components/layout/Header"


export default function ShapeEbbForm(): JSX.Element {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "//embed.typeform.com/next/embed.js"
        script.async = true
        document.body.appendChild(script)
        
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-background">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">
                    Shape the Future of Ebb
                </h1>
                <p className="text-gray-500 text-md text-center mb-8 max-w-2xl">
                    We appreciate you taking a minute to help us make Ebb the best productivity app out there!
                </p>
                <div className="flex flex-col items-center mb-2 w-full">
                    <div className="flex items-center">
                        <div data-tf-live="01K0WGTTH253EVDWGF64X40C36"></div>
                    </div>
                    <div className="w-48 border-t border-gray-800 mt-5" />
                </div>
                <div className="flex items-center text-gray-500 mt-2 text-base text-sm">
                    <svg 
                        className="w-4 h-4 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                    Survey Takes Only 1.5 minutes
                </div>
            </div>
        </div>
    )
}