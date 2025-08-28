import React from 'react'
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { MusicIntegrationBeam } from '../backgrounds/MusicIntegrationBeam'
import { TrackTimeBackground } from '../backgrounds/TrackTimeBackground'
import { FocusProfilesBackground } from '../backgrounds/FocusProfilesBackground'
import { BlockAppBackground } from '../backgrounds/BlockAppBackground'
import { FriendsGlobeBackground } from '../backgrounds/FriendsGlobeBackground'
import { PrivacyBackground } from '../backgrounds/PrivacyBackground'
interface Feature {
  name: string
  description: string
  className: string
  backgroundComponent?: React.ReactNode
}

const features: Feature[] = [
  {
    name: "Track Time",
    description: "Like screen time on steroids",
    className: "md:col-span-1 md:row-span-3", // Bottom-left (rows 1-3 / span 2)
    backgroundComponent: <TrackTimeBackground />,
  },
  {
    name: "Block Apps/Websites",
    description: "Block distractions to stay in the zone",
    className: "md:col-span-2 md:row-span-2", // Bottom-wide (rows 1-2 / span 1)
    backgroundComponent: <BlockAppBackground />,
  },
  {
    name: "Build your perfect workflow",
    description: "Seamlessly connect Spotify and Slack",
    className: "md:col-span-1 md:row-span-2", // Top-right (rows 4-6 / span 2)
    backgroundComponent: <MusicIntegrationBeam className="absolute top-0 left-10 bottom-10 right-0 h-2/3 w-full px-10 pt-15" />,
  },
  {
    name: "Private, Secure & Lightweight",
    description: "Local first, open source, and built for performance.",
    className: "md:col-span-1 md:row-span-4", // Top-left (rows 3-6 / span 3)
    backgroundComponent: <PrivacyBackground />,
  },
  {
    name: "Add Focus Profiles",
    description: "Create profiles for all types of work",
    className: "md:col-span-1 md:row-span-3", // Middle tall (rows 2-6 / span 4)
    backgroundComponent: <FocusProfilesBackground />,
  },
  {
    name: "Compete with Friends",
    description: "Stay motivated with friends",
    className: "md:col-span-1 md:row-span-2", // Mid-right (rows 3-4 / span 1)
    backgroundComponent: <FriendsGlobeBackground />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full pt-10 md:pt-16 pb-20 md:pb-32 px-4 md:px-6">
      <div className="container mx-auto max-w-[1140px]">
        <BentoGrid className="max-w-5xl mx-auto grid-cols-1 md:grid-cols-3 md:grid-rows-[repeat(6,7rem)] auto-rows-auto gap-4">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature}>
              <div className="hidden md:block">
                {feature.backgroundComponent}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
} 