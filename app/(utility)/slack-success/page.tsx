'use client'

import React, { useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function AuthSuccessPage() {
    const openApp = useCallback(() => {
        const searchParams = window.location.search
        const deepLinkUrl = `ebb://slack/callback${searchParams}`
        console.log('deepLinkUrl', deepLinkUrl)
        window.location.href = deepLinkUrl
    }, [])

    useEffect(() => {
        // Try to open automatically on page load
        console.log('openApp')
        openApp()
    }, [openApp])

    return (
        <main 
            className="flex min-h-screen w-full items-center justify-center bg-gray-950 text-white font-sans p-6"
        >
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-2xl font-semibold">
                    Successfully connected to Slack Worksapce! Return to App
                </h1>
                <p className="text-base opacity-80">
                    Click "Open App" to finish logging in
                </p>
                <Button
                    variant="secondary"
                    onClick={openApp}
                    className="mt-2"
                >
                    Open App
                </Button>
                <p className="mt-4 text-sm opacity-50">
                    You can close this window after authentication
                </p>
            </div>
        </main>
    )
} 