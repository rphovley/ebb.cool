import React from 'react'
import { Marquee } from '@/components/ui/marquee'
import { Code, Twitter, Instagram, Smartphone, MessageSquare, Shapes } from 'lucide-react'

// Simplify Rating type
type Rating = 'Creating' | 'Consuming'

interface TrackedApp {
  name: string
  rating: Rating
  time: string
  progress: number // Value between 0 and 100
  Icon: React.ElementType // Use React.ElementType for component type
}

// Update ratingConfig for new ratings
const ratingConfig: Record<Rating, { textColor: string; progressColor: string }> = {
  'Creating': { textColor: 'text-violet-400', progressColor: 'bg-violet-500' },
  'Consuming': { textColor: 'text-red-400', progressColor: 'bg-red-500' },
}

const apps: TrackedApp[] = [
  { name: 'Cursor', rating: 'Creating', time: '2h 25m', progress: 45, Icon: Code },
  { name: 'instagram.com', rating: 'Consuming', time: '1h 15m', progress: 35, Icon: Instagram },
  { name: 'Figma', rating: 'Creating', time: '1h 05m', progress: 30, Icon: Shapes },
  { name: 'x.com', rating: 'Consuming', time: '0h 48m', progress: 25, Icon: Twitter },
  { name: 'Messages', rating: 'Consuming', time: '0h 30m', progress: 15, Icon: Smartphone },
  { name: 'Discord', rating: 'Consuming', time: '0h 55m', progress: 28, Icon: MessageSquare }
]

export function TrackTimeBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden h-full w-full">
       <Marquee
         vertical
         pauseOnHover
         className="w-full max-w-xs h-full"
         style={{
           '--duration': '40s',
           '--gap': '0.5rem',
         } as React.CSSProperties}
       >
         {apps.map((app, index) => {
           const config = ratingConfig[app.rating]
           return (
             <div
               key={`${app.name}-${index}`}
               className="flex items-center justify-between w-full p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-white/10"
             >
               <div className="flex items-center space-x-3 overflow-hidden">
                 <div className="p-2 bg-gray-700 rounded-md flex-shrink-0">
                   <app.Icon className="w-5 h-5 text-white" />
                 </div>
                 <div className="overflow-hidden">
                   <p className="text-sm font-medium text-white truncate">{app.name}</p>
                   <p className={`text-xs ${config.textColor}`}>{app.rating}</p>
                 </div>
               </div>
               <div className="flex flex-col items-end flex-shrink-0">
                  <p className="text-sm text-gray-400 mb-1">{app.time}</p>
                  <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${config.progressColor}`}
                      style={{ width: `${app.progress}%` }}
                    />
                  </div>
               </div>
             </div>
           )
         })}
       </Marquee>
    </div>
  )
} 