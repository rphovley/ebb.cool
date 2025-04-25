import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import { ArrowUpRight } from 'lucide-react'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { DiscordIcon } from "../icons/DiscordIcon"

export function FooterSection() {
  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-[1140px]">
        <div className="col-span-1 md:col-span-2">
          <Logo width={37} height={27} />
          <p className="text-sm text-muted-foreground max-w-xs mt-4">
            Ebb is a macOS app to help you focus. Designed with world-class privacy, performance, and UI.
          </p>
          <div className="flex items-center space-x-4 mt-8">
             <Link href="https://x.com/codeclimbersio" className="text-muted-foreground hover:text-foreground text-xl font-bold">𝕏</Link>
             <Link href="https://discord.gg/qhST6C5XxV" className="text-muted-foreground hover:text-foreground"><DiscordIcon className="h-5 w-5" /></Link>
           </div>
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-32">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Open Source</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Self Host</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground border-t pt-8 gap-4 max-w-[1140px]">
         <p>
           © {new Date().getFullYear()} Extremely Bad Builders LLC. All rights reserved.
         </p>
         <Link href="https://codeclimbers.io" className="group" target="_blank">
           <div className="rounded-lg border border-border bg-card text-xs text-muted-foreground transition-all ease-in hover:cursor-pointer hover:bg-muted">
             <AnimatedShinyText 
               className="inline-flex items-center justify-center px-4 py-1 transition ease-out"
             >
               <span>Created by CodeClimbers</span>
               <ArrowUpRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </AnimatedShinyText>
           </div>
         </Link>
      </div>
    </footer>
  )
} 