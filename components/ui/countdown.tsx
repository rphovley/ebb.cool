"use client"

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Clock } from 'lucide-react'

interface CountdownProps {
  targetDate: Date
  className?: string
  variant?: 'navbar' | 'pricing'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ targetDate, className, variant = 'navbar' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  // Show loading state instead of null to prevent layout shift
  if (!mounted) {
    return (
      <div className={cn(
        variant === 'navbar' 
          ? "bg-card/20 backdrop-blur-lg rounded-xl border shadow-sm px-3 py-2 animate-pulse"
          : "bg-card/20 backdrop-blur-lg rounded-xl border shadow-sm p-6 animate-pulse",
        className
      )}>
        <div className="h-6 w-32 bg-muted/50 rounded"></div>
      </div>
    )
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  if (isExpired) {
    return null
  }

  if (variant === 'navbar') {
    return (
      <div className={cn(
        "bg-card/20 backdrop-blur-lg rounded-xl border shadow-sm flex items-center gap-3 px-3 py-3",
        className
      )}>
        <div className="flex items-center gap-1 text-xs font-mono">
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 font-semibold leading-none">{timeLeft.days}d</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 font-semibold leading-none">{timeLeft.hours.toString().padStart(2, '0')}h</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 font-semibold leading-none">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 font-semibold leading-none">{timeLeft.seconds.toString().padStart(2, '0')}s</span>
          </div>
        <div className="ml-2">
          <span className="text-xs text-muted-foreground font-medium text-yellow-400">Price Change </span>
        </div>
        </div>
      </div>
    )
  }

  // Pricing variant
  return (
    <div className={cn(
      "bg-card/30 backdrop-blur-lg rounded-xl border shadow-sm px-6 py-4",
      className
    )}>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-400">Limited Time Offer</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-lg">
          <div className="flex flex-col items-center px-3 py-2 bg-background/50 rounded-lg">
            <span className="text-2xl font-bold text-foreground">{timeLeft.days}</span>
            <span className="text-xs text-muted-foreground uppercase">Days</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center px-3 py-2 bg-background/50 rounded-lg">
            <span className="text-2xl font-bold text-foreground">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="text-xs text-muted-foreground uppercase">Hours</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center px-3 py-2 bg-background/50 rounded-lg">
            <span className="text-2xl font-bold text-foreground">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="text-xs text-muted-foreground uppercase">Mins</span>
          </div>
          <span className="text-muted-foreground">:</span>
          <div className="flex flex-col items-center px-3 py-2 bg-background/50 rounded-lg">
            <span className="text-2xl font-bold text-foreground">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="text-xs text-muted-foreground uppercase">Secs</span>
          </div>
        </div>
      </div>
    </div>
  )
}
