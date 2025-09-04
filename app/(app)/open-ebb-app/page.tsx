"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function OpenEbbApp() {
  const [isAppInstalled, setIsAppInstalled] = useState<boolean | null>(null)

  useEffect(() => {
    const checkIfAppInstalled = () => {
      // Try to open the app
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = 'ebb://'
      document.body.appendChild(iframe)

      // Set a timeout to check if the app opened
      const timeout = setTimeout(() => {
        // If we're still on this page after 2 seconds, assume app is not installed
        setIsAppInstalled(false)
        document.body.removeChild(iframe)
      }, 5000)

      // Listen for visibility change (app opened successfully)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // App opened successfully
          setIsAppInstalled(true)
          clearTimeout(timeout)
          document.body.removeChild(iframe)
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Cleanup
      return () => {
        clearTimeout(timeout)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe)
        }
      }
    }

    checkIfAppInstalled()
  }, [])

  useEffect(() => {
    // Auto-download if app is not installed
    if (isAppInstalled === false) {
      // Replace with your actual download URL
      window.location.href = 'https://download.ebb.cool/app'
    }
  }, [isAppInstalled])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-2xl font-bold">Opening Ebb App</h1>
        
        {isAppInstalled === null && (
          <div className="space-y-4">
            <p className="text-muted-foreground">Attempting to open the Ebb app...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        )}

        {isAppInstalled === false && (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              App not found. Redirecting to download...
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="https://download.ebb.cool/app">
                  Download Ebb App
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                If download doesn't start automatically, click the button above
              </p>
            </div>
          </div>
        )}

        {isAppInstalled === true && (
          <div className="space-y-4">
            <p className="text-green-600">App opened successfully!</p>
            <p className="text-muted-foreground text-sm">
              You can close this tab now
            </p>
          </div>
        )}

        <div className="pt-4 border-t">
          <Button variant="outline" asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}