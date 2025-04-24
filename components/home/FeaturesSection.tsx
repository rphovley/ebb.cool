import React from 'react'
import { Clock, UserPlus, Ban, Music, Users, ShieldCheck } from 'lucide-react'
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { MusicIntegrationBeam } from '../backgrounds/MusicIntegrationBeam'
import { TrackTimeBackground } from '../backgrounds/TrackTimeBackground'
import { FocusProfilesBackground } from '../backgrounds/FocusProfilesBackground'
import { BlockAppBackground } from '../backgrounds/BlockAppBackground'
import { FriendsGlobeBackground } from '../backgrounds/FriendsGlobeBackground'

// Define the type for a feature including the optional background component
interface Feature {
  name: string
  description: string
  className: string
  backgroundComponent?: React.ReactNode // Add optional background component property
}

const features: Feature[] = [
  {
    // Icon: Clock,
    name: "Track Time",
    description: "Understand where your time goes automatically.",
    className: "col-span-1 row-span-3", // Bottom-left (rows 1-3 / span 2)
    backgroundComponent: <TrackTimeBackground />,
  },
  {
    // Icon: Ban,
    name: "Block Apps/Websites",
    description: "Block distractions to stay in the zone.",
    className: "col-span-1 row-span-4", // Top-left (rows 3-6 / span 3)
    backgroundComponent: <BlockAppBackground />,
  },
  {
    // Icon: Users,
    name: "Integrate Your Music",
    description: "Sync with Spotify and Apple Music.",
    className: "col-span-1 row-span-2", // Top-right (rows 4-6 / span 2)
    backgroundComponent: <MusicIntegrationBeam className="absolute top-0 left-0 right-0 h-2/3 w-full px-8" />,
  },
  {
    // Icon: Music,
    name: "Compete with Friends",
    description: "Stay motivated by competing with friends (soon).",
    className: "col-span-1 row-span-2", // Mid-right (rows 3-4 / span 1)
    backgroundComponent: <FriendsGlobeBackground />,
  },
  {
    // Icon: UserPlus,
    name: "Add Focus Profiles",
    description: "Create custom profiles for different types of work.",
    className: "col-span-1 row-span-3", // Middle tall (rows 2-6 / span 4)
    backgroundComponent: <FocusProfilesBackground />,
  },
  {
    // Icon: ShieldCheck, // Combining Lock, Zap, Database conceptually
    name: "Private, Secure & Lightweight",
    description: "Local first, open source, and built for performance.",
    className: "col-span-2 row-span-2", // Bottom-wide (rows 1-2 / span 1)
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute 
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-[800px] h-[600px] 
                     bg-violet-600/10 
                     rounded-full filter blur-2xl opacity-75"
        ></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to focus</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              And nothing you don't. Powerful features, locally hosted.
            </p>
          </div>
        </div>
         <BentoGrid className="max-w-5xl mx-auto grid-cols-3 grid-rows-[repeat(6,8rem)]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature}>
              {/* Render the background component if it exists */}
              {feature.backgroundComponent}
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
} 