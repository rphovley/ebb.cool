import Link from "next/link"
import { Logo } from "@/components/ui/Logo"
import { Twitter, Instagram, CheckCircle } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-[1140px]">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Logo width={100} />
          <p className="text-sm text-muted-foreground max-w-xs">
            Ebb is an undetectable AI-powered assistant built for Virtual Meetings, Sales calls, and more.
          </p>
          <div className="flex space-x-4">
             <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></Link>
           </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Refund policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cancellation Policy</Link>
          </nav>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Get Started</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Log in to Ebb</Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground border-t pt-8 gap-4 max-w-[1140px]">
         <div className="flex items-center gap-2">
           <CheckCircle className="h-4 w-4 text-green-500" />
           <span>All services are online</span>
         </div>
        <p>
          © {new Date().getFullYear()} Ebb. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 