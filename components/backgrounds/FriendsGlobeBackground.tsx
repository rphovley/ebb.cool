'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'motion/react'

type Status = 'In focus' | 'Online' | 'Offline'

interface Avatar {
  id: string
  name: string
  status: Status
  top: string
  left: string
  imageUrl: string
}

const avatars: Avatar[] = [
  { 
    id: 'paul', 
    name: 'Paul', 
    status: 'In focus', 
    top: '30%', 
    left: '35%', 
    imageUrl: '/images/paul.jpg'
  }, 
  { 
    id: 'nathan', 
    name: 'Nathan', 
    status: 'Online', 
    top: '45%', 
    left: '65%', 
    imageUrl: '/images/nathan.jpg'
  }, 
]

const statusStyles: Record<Status, string> = {
  'In focus': 'bg-violet-500',
  'Online': 'bg-green-500',
  'Offline': 'bg-gray-500',
}

export function FriendsGlobeBackground() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden select-none">

      <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48">
         <div 
           className="relative w-full h-full rounded-full bg-gradient-radial from-gray-800/80 via-gray-900/90 to-black/95 shadow-[0_0_40px_8px_rgba(168,85,247,0.3)] border border-violet-500/30 overflow-hidden"
         >
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:6px_6px] opacity-40"></div>
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(100,116,139,0.1)_0%,_rgba(51,65,85,0.15)_30%,_rgba(30,41,59,0.2)_70%,_transparent_100%)] opacity-60 blur-[2px]"></div>
            <div className="absolute inset-1 rounded-full border border-violet-400/10 shadow-[inset_0_0_10px_2px_rgba(192,132,252,0.1)]"></div>
            
            {avatars.map((avatar) => {
              const statusColor = statusStyles[avatar.status]
              return (
                <motion.div
                  key={avatar.id}
                  className="absolute cursor-pointer"
                  style={{
                    top: avatar.top,
                    left: avatar.left,
                  }}
                  initial={{ scale: 1, x: '-50%', y: '-50%' }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: '-55%',
                    zIndex: 10,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="relative w-10 h-10 rounded-full border border-gray-600 shadow-md bg-gray-700">
                    <Image 
                      src={avatar.imageUrl} 
                      alt={avatar.name} 
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full rounded-full"
                      priority
                    />
                    <span
                      className={cn(
                        "absolute top-[-3px] right-[-3px] w-4 h-4 rounded-full border-2 border-gray-800", 
                        statusColor
                      )}
                    />
                  </div>
                </motion.div>
              )
            })}
         </div>
      </div>
    </div>
  )
} 