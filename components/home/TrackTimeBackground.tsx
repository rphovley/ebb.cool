import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Twitter, MessageSquare, YoutubeIcon } from 'lucide-react' // Assuming these or similar icons

// Define the structure for each tracked item
interface TrackedItem {
  id: number
  icon: React.ElementType // Using Lucide icons for placeholders
  name: string
  category: string
  time: string
  progress: number // Percentage for the progress bar
}

// Data for the rotating items
const items: TrackedItem[] = [
  { id: 1, icon: Code , name: 'Cursor', category: 'High Creation', time: '2h 17m', progress: 45 },
  { id: 2, icon: Twitter, name: 'X.com', category: 'Social Media', time: '0h 45m', progress: 20 },
  { id: 3, icon: Code, name: 'Discord', category: 'Communication', time: '1h 05m', progress: 30 }, // Using Code icon as placeholder
  { id: 4, icon: MessageSquare, name: 'Messages', category: 'Communication', time: '0h 20m', progress: 10 },
  { id: 5, icon: YoutubeIcon, name: 'YouTube', category: 'Entertainment', time: '1h 55m', progress: 40 },
]

export function TrackTimeBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000) // Rotate every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const currentItem = items[currentIndex]
  const IconComponent = currentItem.icon

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
       <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xs" // Constrain width
        >
            <div className="flex items-center space-x-3 p-3 bg-gray-800/50 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg">
                <div className="flex-shrink-0 p-2 bg-gray-700 rounded-md">
                    <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-white truncate">{currentItem.name}</p>
                        <p className="text-xs text-gray-400">{currentItem.time}</p>
                    </div>
                    <p className="text-xs text-purple-400 mb-1">{currentItem.category}</p>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: `${currentItem.progress}%` }}
                         ></div>
                    </div>
                </div>
            </div>
        </motion.div>
       </AnimatePresence>
    </div>
  )
} 