"use client"

import React, { useState } from 'react'
import { Plus, X, Github, Monitor, MessageSquare, Clapperboard, User, Text, Music, Timer } from 'lucide-react'
import { cn } from '@/lib/utils'

type Profile = 'Studying' | 'Coding'

const profilesData = {
  Studying: {
    blocked: [
      { name: 'social media (14)', Icon: User },
      { name: 'entertainment (30)', Icon: Clapperboard },
    ],
    color: 'bg-violet-600',
    playlistName: 'ADHD Focus',
    blockStatus: 'Block',
  },
  Coding: {
    blocked: [
      { name: 'github.com', Icon: Github },
      { name: 'vercel.com', Icon: Monitor },
      { name: 'Cursor', Icon: Text },
    ],
    color: 'bg-violet-600',
    playlistName: 'Hans Zimmer Soundtracks',
    blockStatus: 'Allow',
  },
}

export function FocusProfilesBackground() {
  const [activeProfile, setActiveProfile] = useState<Profile>('Studying')

  const currentProfileData = profilesData[activeProfile]

  const handleProfileClick = (profileName: Profile) => {
    setActiveProfile(profileName)
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 p-2 overflow-hidden select-none">
      <div className={cn(
        "relative w-full max-w-[280px] md:max-w-xs rounded-lg border border-white/10 bg-gray-900/70 shadow-xl backdrop-blur-sm p-3 md:p-4 transition-colors duration-300",
      )}>
        <div 
          className="absolute flex flex-col items-center pointer-events-none z-10"
          style={{ top: '-24px', left: '100px' }}
        >
           <span className="text-xs font-mono text-yellow-400">click me</span>
           <span className="text-yellow-400 text-lg leading-none">↓</span>
        </div>

        <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
          {(Object.keys(profilesData) as Profile[]).map((profileName) => (
            <button
              key={profileName}
              onClick={() => handleProfileClick(profileName)}
              className={cn(
                "px-2 py-1 md:px-2.5 md:py-1 text-[10px] md:text-xs font-medium rounded-md transition-colors duration-300 cursor-pointer",
                activeProfile === profileName
                  ? `${currentProfileData.color} text-white shadow-md`
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              )}
            >
              {profileName}
            </button>
          ))}
          <button className="ml-1 p-1 md:p-1.5 bg-gray-700/50 text-gray-400 rounded-md hover:bg-gray-600/50 transition-colors">
            <Plus size={14} />
          </button>
        </div>

        <div className="bg-gray-800/60 rounded-md p-2 md:p-3 mb-3 md:mb-4 border border-white/5 flex flex-col justify-between min-h-[80px] md:min-h-[90px]">
          <div>
            <div className="flex flex-wrap gap-1 md:gap-1.5 mb-1 md:mb-2">
              {currentProfileData.blocked.map((item) => (
                <span key={item.name} className="flex items-center gap-1 bg-gray-700/80 text-gray-200 text-[9px] md:text-[10px] px-1.5 py-0.5 rounded">
                  <item.Icon size={10} className="opacity-80" />
                  {item.name}
                  <X size={10} className="ml-0.5 opacity-60" />
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search apps & websites..."
              className="w-full bg-transparent text-gray-400 text-[10px] md:text-xs placeholder-gray-500 focus:outline-none"
              readOnly
            />
          </div>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1 text-yellow-400">
            </div>
            <div className="flex items-center gap-1 bg-gray-700/50 p-0.5 rounded-md">
              <button className={cn(
                "px-1.5 py-0.5 text-[10px] md:text-xs rounded transition-colors",
                currentProfileData.blockStatus === 'Block'
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-400 hover:bg-gray-600/50'
              )}>
                Block
              </button>
              <button className={cn(
                "px-1.5 py-0.5 text-[10px] md:text-xs rounded transition-colors",
                currentProfileData.blockStatus === 'Allow'
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-400 hover:bg-gray-600/50'
              )}>
                Allow
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
} 