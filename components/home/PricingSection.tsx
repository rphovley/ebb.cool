import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const freeFeatures = [
  "Robust screen time analytics",
  "Block apps and websites",
  "Create focus sessions",
  "Integrate Spotify & Apple Music",
]

const paidFeatures = [
  "3 macOS devices",
  "6 focus profiles",
  "Typewriter mode",
  "Hard difficulty mode",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        {/* Multiple overlapping circles for blob effect */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full filter blur-2xl opacity-75"></div>
        <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-violet-600/10 rounded-full filter blur-2xl opacity-75"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try for free</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             No credit card required. Only your soul.
            </p>
          </div>
          {/* Optional: Add Learn More button if needed */}
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Free Tier Card */}
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Analytics, blocking, and music</CardDescription>
              <div className="text-3xl font-bold">Free</div>
              <p className="text-xs text-muted-foreground">Free forever.</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm font-medium">Includes:</p>
              <ul className="space-y-2">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download Free</Button>
            </CardFooter>
          </Card>

          {/* Paid Tier Card */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Pay Once</CardTitle>
              <CardDescription>Take your focus to the next level</CardDescription>
              <div className="text-3xl font-bold">$37 <span className="text-sm font-normal text-muted-foreground">one time</span></div>
              <p className="text-xs text-muted-foreground">Your copy forever & one year of updates.</p>
            </CardHeader>
            <CardContent className="space-y-2">
               <p className="text-sm font-medium">Free tier plus:</p>
               <ul className="space-y-2">
                {paidFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                     <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download Free</Button> { /* TODO: Link to download/purchase */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
} 