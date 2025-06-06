'use client'

import React, { useState, useEffect, useRef } from 'react'
import { XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

const TARGET_TEXT = 'x.com'
const TYPING_SPEED_MS = 300
const NOTIFICATION_DELAY_MS = 300
const RESET_DELAY_MS = 7000
const RESTART_DELAY_MS = 1000

export function BlockAppBackground() {
  const [inputValue, setInputValue] = useState('')
  const [showBlocked, setShowBlocked] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

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
      clearAllTimers()
      setInputValue('')
      setShowBlocked(false)
      setTypingComplete(false)
      index = 0

      typingIntervalId.current = setInterval(() => {
        if (index < TARGET_TEXT.length) {
          const nextChar = TARGET_TEXT[index]
          if (nextChar !== undefined) {
             setInputValue((prev) => prev + nextChar)
          } else {
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
            restartTimeoutId.current = setTimeout(startTyping, RESTART_DELAY_MS + 200)
          }, RESET_DELAY_MS + 50)
        }
      }, TYPING_SPEED_MS)
    }

    startTyping()

    return () => {
      clearAllTimers()
    }
  }, [])

  return (
    <div className="absolute inset-0 flex flex-col items-center pt-14 p-4 overflow-hidden pointer-events-none select-none">
      <div className="relative w-full max-w-md"> 
        <div className="w-full bg-gray-800/50 rounded-md p-3 border border-white/10 backdrop-blur-sm"> 
          <p className="text-gray-300 text-sm font-mono h-5">{inputValue}<span className={cn("animate-pulse", typingComplete ? 'invisible' : 'visible')}>█</span></p> 
        </div>

        <AnimatePresence>
          {showBlocked && (
            <motion.div
              key="blocked-notification"
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 5 }} 
              transition={{ duration: 0.2, ease: "easeOut" }} 
              className="absolute top-[60%] left-[25%] w-[70%] max-w-none bg-[var(--card)] rounded-md border border-white/10 shadow-xl overflow-hidden z-10" 
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div className="p-3 flex items-center justify-between"> 
                <div className="flex items-center gap-2"> 
                  <XCircle size={20} className="text-red-500 flex-shrink-0" /> 
                  <span className="text-white font-medium text-sm">Blocked</span>
                </div>
                <button className="bg-gray-800/70 text-gray-300 text-xs px-3 py-1 rounded-md hover:bg-gray-700/80 transition-colors">
                  Snooze 1 min
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600/30 overflow-hidden">
                <motion.div 
                  className="h-full bg-red-500"
                  initial={{ width: '100%' }} 
                  animate={{ width: '0%' }}   
                  transition={{ duration: RESET_DELAY_MS / 1000, ease: 'linear' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 