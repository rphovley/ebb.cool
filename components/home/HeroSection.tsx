import { Button } from "@/components/ui/button"
import Aurora from "@/components/backgrounds/aurora"
import { AppleIcon } from "@/components/icons/AppleIcon"
import Image from "next/image"
import Link from 'next/link'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"
import { DialogClose, DialogTitle } from "@/components/ui/dialog"
import { XIcon } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { APPLE_SILICON_DOWNLOAD_URL, INTEL_DOWNLOAD_URL } from "@/lib/downloadUtils"
import { AnimatedTooltipPreview } from "@/components/ui/animated-tooltip-demo"

export function HeroSection() {
  return (
     <section className="relative w-full text-center flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-8rem)] overflow-hidden">
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30 dark:opacity-50"
        colorStops={["#7c3aed", "#4c1d95", "#7c3aed"]}
        blend={0.5}
        amplitude={1}
        speed={0.8}
      />
      <div className="relative z-10 flex flex-col items-center max-w-[1140px] mx-auto px-4 md:px-6 pt-20">
        <Dialog>
          <div className="relative group mb-8 w-fit">
            <Image 
              src="/images/ebb-app.png" 
              alt="Ebb App Icon" 
              width={128} 
              height={128} 
              className="transition-all duration-300 ease-in-out group-hover:brightness-75" // Dim image slightly on hover
            />
            <DialogTrigger asChild>
              <button className="absolute inset-0 flex items-center justify-center bg-background/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl cursor-pointer">
                <Play className="h-12 w-12 text-white" fill="white" />
              </button>
            </DialogTrigger>
            <span className="absolute top-[-0.5rem] right-[-1rem] z-10 inline-flex flex-col text-xs font-medium text-yellow-400">
              <span className="self-end translate-x-2">video inside</span>
              <span className="text-sm">↙</span>
            </span>
          </div>
          <DialogContent className="sm:max-w-[850px] p-0">
             <VisuallyHidden>
               <DialogTitle>Ebb App Demo Video</DialogTitle>
             </VisuallyHidden>
             <iframe 
               className="w-full aspect-[3456/2234] rounded-lg" 
               src="https://www.youtube.com/embed/a3YmaPWTCVU?autoplay=1&rel=0"
               title="YouTube video player" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
             ></iframe>
             <DialogClose className="absolute top-[-0.75rem] right-[-0.75rem] z-50 rounded-full bg-muted p-1.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
               <XIcon className="h-4 w-4 text-muted-foreground" />
               <span className="sr-only">Close</span>
             </DialogClose>
          </DialogContent>
        </Dialog>

        <h1 className="text-5xl font-bold tracking-tighter mb-4">
          Focus never felt so good.
        </h1>
        <p className="max-w-sm text-md text-muted-foreground mb-8">
          macOS app that helps you stay focused with blocking, music, and more ✨
        </p>
        <div className="flex flex-col gap-4 mb-4">
          <Link href={APPLE_SILICON_DOWNLOAD_URL}>
            <Button size="lg" className="px-24 w-full">
              <AppleIcon className="mr-1 h-5 w-5" /> Download for Apple Silicon
            </Button>
          </Link>
          <Link href={INTEL_DOWNLOAD_URL}>
            <Button size="lg" variant="outline" className="px-24 w-full">
              Mac Intel Download
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <AnimatedTooltipPreview />
          <h2 className="text-xs text-muted-foreground tracking-tighter pl-4">
          Trusted by 60+ active founders and creatives 🤝
          </h2>
        </div>
      </div>
    </section>
  )
} 