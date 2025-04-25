'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// Define the new image URL
const privacyImageUrl = "https://aehiyih706.ufs.sh/f/bHYQkESg8f1Uv9CBehLQD1wyOHTgXrtWmIR4jVlZua2nSBY0";

export function PrivacyBackground() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start p-4 overflow-hidden pointer-events-none select-none">
      {/* Container for the image and labels */}
      <div className="relative w-full h-[80%] max-w-full">
        <Image 
          src={privacyImageUrl}
          alt="Privacy, Security, Lightweight illustration"
          layout="fill" // Use fill layout
          objectFit="contain" // Ensure the whole image is visible
          priority // Optional: Consider adding priority if it's above the fold
        />
        {/* Floating Labels */}
        <span className="absolute text-yellow-400 font-mono text-xs" style={{ top: '75%', left: '5%' }}>open source</span>
        <span className="absolute text-yellow-400 font-mono text-xs" style={{ top: '78%', left: '60%' }}>local first</span>
        <span className="absolute text-yellow-400 font-mono text-xs" style={{ top: '55%', right: '10%' }}>&lt;30 mb</span>
      </div>
    </div>
  )
} 