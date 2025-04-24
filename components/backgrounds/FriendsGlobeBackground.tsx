'use client' // May not be strictly needed if no hooks, but good practice for components with potential visual effects

import React from 'react'
import { cn } from '@/lib/utils'

type Status = 'In focus' | 'Online' | 'Offline'

interface Friend {
  name: string
  status: Status
}

// Keep only Alex and Sarah
const friends: Friend[] = [
  { name: 'Alex', status: 'In focus' },
  { name: 'Sarah', status: 'Online' }
]

const statusColors: Record<Status, string> = {
  'In focus': 'bg-violet-500',
  'Online': 'bg-green-500',
  'Offline': 'bg-gray-500',
}

export function FriendsGlobeBackground() {
  return (
    // Removed pointer-events-none to allow interaction
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden select-none gap-4">
      {/* Friends List - Moved Above Globe */} 
      <div className="flex justify-center gap-3 w-full max-w-xs">
        {friends.map((friend) => (
          <div
            key={friend.name}
            // Added cursor-pointer and hover effect
            className="bg-gray-900/70 border border-white/10 rounded-md p-2.5 backdrop-blur-sm w-1/2 cursor-pointer hover:border-white/20 transition-colors"
          >
            <p className="text-white text-sm font-medium mb-1">{friend.name}</p>
            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  'w-2 h-2 rounded-full',
                  statusColors[friend.status]
                )}
              />
              <p className="text-gray-400 text-xs">{friend.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Globe - Centered */} 
      <div className="relative flex-shrink-0 w-36 h-36 md:w-40 md:h-40"> {/* Slightly smaller globe */} 
         {/* Subtle background dots attempt - may need refinement */}
         <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:8px_8px] opacity-50"></div>
         {/* Sphere */}
         <div 
           className="relative w-full h-full rounded-full bg-gradient-radial from-gray-800/80 via-gray-900/90 to-black/95 shadow-[0_0_30px_5px_rgba(168,85,247,0.4)] border border-violet-500/20 overflow-hidden"
         >
            {/* Landmass Texture Layer */}
             <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(100,116,139,0.1)_0%,_rgba(51,65,85,0.15)_30%,_rgba(30,41,59,0.2)_70%,_transparent_100%)] opacity-60 blur-[2px]"></div>
             {/* Inner subtle glow/highlight */}
            <div className="absolute inset-1 rounded-full border border-violet-400/10 shadow-[inset_0_0_10px_2px_rgba(192,132,252,0.1)]"></div>
         </div>
      </div>
    </div>
  )
} 