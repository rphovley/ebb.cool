'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'

export default function LicenseCallbackPage() {
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
    const [deepLinkUrl, setDeepLinkUrl] = useState<string>("")
    const [message, setMessage] = useState<string>("Processing...")

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const sessionId = searchParams.get("session_id")

        if (sessionId) {
            setIsSuccess(true)
            setDeepLinkUrl(`ebb://license/success?session_id=${sessionId}`)
            setMessage('Payment successful! Click "Open App" to activate your license.')
        } else {
            setIsSuccess(false)
            setDeepLinkUrl("ebb://license/cancel")
            setMessage("Payment cancelled. You can close this window or return to the app.")
        }
    }, [])

    const openApp = useCallback(() => {
        if (deepLinkUrl) {
            window.location.href = deepLinkUrl
        }
    }, [deepLinkUrl])

    useEffect(() => {
        // Try to open automatically once the deep link is set
        if (deepLinkUrl) {
            openApp()
        }
    }, [deepLinkUrl, openApp])

    const heading = isSuccess === null
        ? "Processing..."
        : isSuccess
          ? "Payment Successful"
          : "Payment Cancelled"

    return (
        <main 
            className="flex min-h-screen w-full items-center justify-center bg-gray-950 text-white font-sans p-6"
        >
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-4xl mb-4">🎉</p>
                <h1 className="text-2xl font-semibold">
                    {heading}
                </h1>
                <p className="text-base opacity-80">
                    {message}
                </p>
                {deepLinkUrl && (
                    <Button
                        variant="secondary"
                        onClick={openApp}
                        className="mt-2"
                    >
                        Open App
                    </Button>
                )}
                <p className="mt-4 text-sm opacity-50">
                    You can close this window.
                </p>
            </div>
        </main>
    )
} 