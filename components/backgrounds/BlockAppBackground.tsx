'use client'

import React, { useState, useEffect, useRef } from 'react'
import { XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

const TARGET_TEXT = 'x.com'
const TYPING_SPEED_MS = 300
const NOTIFICATION_DELAY_MS = 300
const RESET_DELAY_MS = 4000
const RESTART_DELAY_MS = 1000 // Delay before restarting typing after fade out

export function BlockAppBackground() {
  const [inputValue, setInputValue] = useState('')
  const [showBlocked, setShowBlocked] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  // Use refs to hold interval/timeout IDs to ensure cleanup uses the correct ID
  const typingIntervalId = useRef<NodeJS.Timeout | null>(null)
  const notificationTimeoutId = useRef<NodeJS.Timeout | null>(null)
  const resetTimeoutId = useRef<NodeJS.Timeout | null>(null)
  const restartTimeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let index = 0

    const clearAllTimers = () => {
      if (typingIntervalId.current) clearInterval(typingIntervalId.current)
      if (notificationTimeoutId.current) clearTimeout(notificationTimeoutId.current)
      if (resetTimeoutId.current) clearTimeout(resetTimeoutId.current)
      if (restartTimeoutId.current) clearTimeout(restartTimeoutId.current)
    }

    const startTyping = () => {
      clearAllTimers() // Clear any existing timers before starting
      setInputValue('')
      setShowBlocked(false)
      setTypingComplete(false)
      index = 0

      typingIntervalId.current = setInterval(() => {
        if (index < TARGET_TEXT.length) {
          // Ensure we only append valid characters
          const nextChar = TARGET_TEXT[index]
          if (nextChar !== undefined) {
             setInputValue((prev) => prev + nextChar)
          } else {
             // Should not happen with index check, but as a safeguard
             console.error("Typing index out of bounds");
             clearAllTimers();
             return;
          }
          index++
        } else {
          if (typingIntervalId.current) clearInterval(typingIntervalId.current)
          setTypingComplete(true)
          
          notificationTimeoutId.current = setTimeout(() => {
            setShowBlocked(true)
          }, NOTIFICATION_DELAY_MS)
          
          resetTimeoutId.current = setTimeout(() => {
            setShowBlocked(false)
            // Restart typing after notification fades out (controlled by AnimatePresence duration)
            restartTimeoutId.current = setTimeout(startTyping, RESTART_DELAY_MS) 
          }, RESET_DELAY_MS)
        }
      }, TYPING_SPEED_MS)
    }

    startTyping() // Initial start

    // Cleanup function runs on unmount
    return () => {
      clearAllTimers()
    }
  }, []) // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden pointer-events-none select-none">
      {/* Simple input field representation */}
      <div className="w-full max-w-xs bg-gray-800/50 rounded-md p-3 border border-white/10 mb-4 backdrop-blur-sm">
        <p className="text-gray-300 text-sm font-mono h-5">{inputValue}<span className={cn("animate-pulse", typingComplete ? 'invisible' : 'visible')}>█</span></p> 
      </div>

      {/* Blocked Notification with AnimatePresence */}
      <AnimatePresence>
        {showBlocked && (
          <motion.div
            key="blocked-notification" // Key is important for AnimatePresence
            initial={{ opacity: 0, scale: 0.9 }} // Start hidden and slightly scaled down
            animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal scale
            exit={{ opacity: 0, scale: 0.95 }} // Animate out by fading and scaling down slightly
            transition={{ duration: 0.3, ease: "easeInOut" }} // Animation timing
            className="relative w-full max-w-xs bg-gray-900/80 rounded-lg border border-white/10 shadow-xl backdrop-blur-md overflow-hidden"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <XCircle size={24} className="text-red-500 flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Blocked</span>
              </div>
              <button className="bg-gray-700/60 text-gray-300 text-sm px-4 py-1.5 rounded-md hover:bg-gray-600/70 transition-colors">
                Snooze 1 min
              </button>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600/30">
              <div className="h-full bg-red-500 w-3/4"></div> {/* Example progress */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 