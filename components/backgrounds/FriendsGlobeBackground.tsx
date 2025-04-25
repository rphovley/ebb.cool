'use client' // May not be strictly needed if no hooks, but good practice for components with potential visual effects

import React from 'react'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react' // Import User icon

type Status = 'In focus' | 'Online' | 'Offline'

interface Avatar {
  id: string
  name: string
  status: Status
  top: string
  left: string
  Icon: React.ElementType // Changed from svgContent to Icon
}

// Removed SVG Definitions

// Define avatar positions and statuses using User icon
const avatars: Avatar[] = [
  { id: 'alex', name: 'Alex', status: 'In focus', top: '30%', left: '35%', Icon: User }, 
  { id: 'sarah', name: 'Sarah', status: 'Online', top: '45%', left: '65%', Icon: User }, 
]

// Simplified status styles - just background color needed for indicator
const statusStyles: Record<Status, string> = {
  'In focus': 'bg-violet-500',
  'Online': 'bg-green-500',
  'Offline': 'bg-gray-500',
}

export function FriendsGlobeBackground() {
  return (
    // Allow interaction if avatars become clickable later
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden select-none">
      {/* Friends List Removed */}

      {/* CSS Globe - Centered */}
      <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48"> {/* Size adjusted slightly */}
         {/* Sphere */}
         <div 
           className="relative w-full h-full rounded-full bg-gradient-radial from-gray-800/80 via-gray-900/90 to-black/95 shadow-[0_0_40px_8px_rgba(168,85,247,0.3)] border border-violet-500/30 overflow-hidden"
         >
            {/* Subtle background dots */}
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:6px_6px] opacity-40"></div>
            {/* Landmass Texture Layer */}
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(100,116,139,0.1)_0%,_rgba(51,65,85,0.15)_30%,_rgba(30,41,59,0.2)_70%,_transparent_100%)] opacity-60 blur-[2px]"></div>
            {/* Inner subtle glow/highlight */}
            <div className="absolute inset-1 rounded-full border border-violet-400/10 shadow-[inset_0_0_10px_2px_rgba(192,132,252,0.1)]"></div>
            
            {/* Avatars */}
            {avatars.map((avatar) => {
              const statusColor = statusStyles[avatar.status]
              return (
                // Avatar container - positioned on the globe
                <div
                  key={avatar.id}
                  className="absolute"
                  style={{
                    top: avatar.top,
                    left: avatar.left,
                    transform: 'translate(-50%, -50%)', // Center the container
                  }}
                >
                  {/* Avatar Icon Container */}
                  <div className="relative w-10 h-10 rounded-full border-2 border-white/80 shadow-md bg-gray-700 flex items-center justify-center"> {/* Removed overflow-hidden, added flex centering */}
                    {/* Render the Icon component */} 
                    <avatar.Icon className="w-5 h-5 text-gray-300" /> 
                    {/* Status indicator dot */}
                    <span
                      className={cn(
                        "absolute top-[-3px] right-[-3px] w-4 h-4 rounded-full border-2 border-gray-800", 
                        statusColor
                      )}
                    />
                  </div>
                </div>
              )
            })}
         </div>
      </div>
    </div>
  )
} 