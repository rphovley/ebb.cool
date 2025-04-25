"use client"

import React, { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

// Use default SVG import
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import AppleMusicIcon from "@/components/icons/AppleMusicIcon";
import EbbIcon from "@/components/icons/EbbIcon";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-secondary p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export function MusicIntegrationBeam({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotifyRef = useRef<HTMLDivElement>(null)
  const appleMusicRef = useRef<HTMLDivElement>(null)
  const ebbRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[90%] items-center justify-center overflow-hidden p-4 mx-auto",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          {/* Left Icons */}
          <Circle ref={spotifyRef} className="size-14">
            <SpotifyIcon className="h-full w-full" />
          </Circle>
          <Circle ref={appleMusicRef} className="size-14">
            <AppleMusicIcon className="h-full w-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
           {/* Right Icon */}
          <Circle ref={ebbRef} className="size-12">
            <EbbIcon className="text-foreground h-full w-full" />
          </Circle>
        </div>
      </div>

      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={spotifyRef}
        toRef={ebbRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={appleMusicRef}
        toRef={ebbRef}
        duration={3}
        delay={0.5}
      />
    </div>
  )
}

