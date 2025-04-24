import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Download, Twitter, Instagram } from 'lucide-react' // Assuming lucide-react is installed
import { Logo } from '@/components/ui/Logo' // Updated import

// Header Component
export function Header() {
  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "1-Star Reviews", href: "#testimonials" }, // Maps to Testimonials section
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-[1140px] items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="mr-4 flex items-center">
          <Logo width={36} height={36} />
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button>
            Download
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
} 