'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Volume2 } from 'lucide-react'
import { motion } from 'motion/react'

const privacyImageUrl = "https://aehiyih706.ufs.sh/f/bHYQkESg8f1Uv9CBehLQD1wyOHTgXrtWmIR4jVlZua2nSBY0"

type LabelType = 'oss' | 'local' | 'mb'

export function PrivacyBackground() {
  const [animatingLabel, setAnimatingLabel] = useState<LabelType | null>(null)

  const handleLabelClick = (label: LabelType, soundPath: string) => {
    if (animatingLabel === label) return

    setAnimatingLabel(label)
    const audio = new Audio(soundPath)
    audio.play().catch(error => console.error(`Error playing sound: ${soundPath}`, error))

    setTimeout(() => {
      setAnimatingLabel(null)
    }, 150)
  }

  const animationEase = [0.22, 1, 0.36, 1]

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start p-4 overflow-hidden select-none">
      <div className="relative w-full h-[80%] max-w-full">
        <Image
          src={privacyImageUrl}
          alt="Privacy, Security, Lightweight illustration"
          layout="fill"
          objectFit="contain"
          priority
          className="pointer-events-none"
        />
        <motion.span
          className="absolute text-yellow-400 font-mono text-xs cursor-pointer pointer-events-auto inline-flex items-center space-x-1"
          style={{ top: '75%', left: '5%' }}
          onClick={() => handleLabelClick('oss', '/audio/ossYeahhh.mp3')}
          animate={{
            scale: animatingLabel === 'oss' ? 1.5 : 1
          }}
          transition={{
            duration: 1,
            ease: animationEase
          }}
        >
          <span>open source</span>
          <Volume2 className="h-3 w-3" />
        </motion.span>

        <motion.span
          className="absolute text-yellow-400 font-mono text-xs cursor-pointer pointer-events-auto inline-flex items-center space-x-1"
          style={{ top: '78%', left: '60%' }}
          onClick={() => handleLabelClick('local', '/audio/localYeahhh.mp3')}
          animate={{
            scale: animatingLabel === 'local' ? 1.25 : 1
          }}
          transition={{
            duration: 0.75,
            ease: animationEase
          }}
        >
          <span>local first</span>
          <Volume2 className="h-3 w-3" />
        </motion.span>

        <motion.span
          className="absolute text-yellow-400 font-mono text-xs cursor-pointer pointer-events-auto inline-flex items-center space-x-1"
          style={{ top: '55%', right: '10%' }}
          onClick={() => handleLabelClick('mb', '/audio/mbYeahhh.mp3')}
          animate={{
            scale: animatingLabel === 'mb' ? 2.5 : 1
          }}
          transition={{
            duration: 3,
            ease: animationEase
          }}
        >
          <span>&lt;30 mb</span>
          <Volume2 className="h-3 w-3" />
        </motion.span>
      </div>
    </div>
  )
} 