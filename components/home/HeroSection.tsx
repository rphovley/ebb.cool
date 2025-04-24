import { Button } from "@/components/ui/button"
import Aurora from "@/components/backgrounds/aurora"

export function HeroSection() {
  return (
     <section className="relative w-full text-center flex flex-col items-center justify-center h-[calc(100vh-6rem)] overflow-hidden">
       {/* Aurora Background */}
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30 dark:opacity-50"
        colorStops={["#7c3aed", "#4c1d95", "#7c3aed"]} // Derived from dark theme primary, chart-4, destructive
        blend={0.5}
        amplitude={1} // Adjust amplitude for subtlety
        speed={0.8} // Adjust speed
      />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Focus never felt so good
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl mb-8">
          macOS app that helps you stay focused with blocking, music, and more ✨
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button size="lg">Download for macOS</Button>
          <Button size="lg" variant="outline">Mac Intel Download</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          "can't slack anymore"
        </p>
        {/* Placeholder for the 'Helping people...' text if needed */}
      </div>
    </section>
  )
} 