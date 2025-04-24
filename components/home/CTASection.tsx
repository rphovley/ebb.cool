import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="cta" className="relative w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-600/15 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute -top-5 right-[15%] w-56 h-56 bg-violet-700/15 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to ebb?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Try for free today
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg">Try Ebb for Free</Button>
             {/* Optional: Add secondary button if needed */}
          </div>
           <p className="text-xs text-muted-foreground mt-4">
              macOS Sequoia 15.0+ is recommended
            </p>
        </div>
      </div>
    </section>
  )
} 