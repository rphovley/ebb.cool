import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, KeyRound, BadgeCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const freeFeatures = [
  "Screen time analytics",
  "Create focus sessions",
  "Block apps and websites",
  "Add Spotify & Apple Music",
  "1 Focus Profile",
  "1 macOS device",
]

const paidFeatures = [
  "3 macOS devices",
  "Typewriter mode",
  "Allow list",
  "6 focus profiles",
  "Hard difficulty mode",
  "1 year of updates",
]

const proAvatars: string[] = [
  "/images/camden.jpg",
  "/images/razvan.jpg",
  "/images/strw.jpg",
  "/images/samantha.jpg",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        {/* Multiple overlapping circles for blob effect */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full filter blur-2xl opacity-75"></div>
        <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-violet-600/10 rounded-full filter blur-2xl opacity-75"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try for free</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             No credit card required. Only your soul.
            </p>
          </div>
          {/* Optional: Add Learn More button if needed */}
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 items-start">
          {/* Free Tier Card - Updated */}
          <Card> {/* Uses default border */}
             <CardHeader className="pt-4 pb-6">
               {/* Free Tier Badge - Updated style */}
               <div className="inline-flex self-start items-center max-w-fit rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4 gap-1">
                 <span>Free Tier</span>
               </div>
               {/* Removed CardTitle */}
               {/* Moved Description below price */}
               <div className="flex items-baseline justify-start gap-2 pt-4">
                 <span className="text-5xl font-bold">Free</span>
                 <span className="text-xl text-muted-foreground">forever</span>
               </div>
               <CardDescription className="mt-1">Analytics, blocking, and music</CardDescription> {/* Moved here, added mt-1 */}
               <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6">Download Free</Button>
             </CardHeader>
             <CardContent className="flex flex-col items-start space-y-4 pt-2"> {/* Removed social proof placeholder, adjusted spacing/pt */}
                {/* Removed Social Proof Placeholder */}

               {/* Feature List - 2 columns */}
               <ul className="grid grid-cols-2 gap-x-8 gap-y-2 w-full px-0 md:px-0">
                 {freeFeatures.map((feature, index) => (
                   <li key={index} className="flex items-center gap-2">
                     <Check className="h-4 w-4 text-primary flex-shrink-0" />
                     <span className="text-sm">{feature}</span>
                   </li>
                 ))}
               </ul>
             </CardContent>
             <CardFooter className="flex-col items-start space-y-4 pt-0"> {/* Removed button, adjusted pt */}
               {/* Footer is now potentially empty or used for other things */}
             </CardFooter>
           </Card>

          {/* Paid Tier Card - Updated */}
          <div className="flex flex-col items-start">
            <Card className="w-full">
              <CardHeader className="pt-4 pb-6">
                {/* Ebb Pro Badge - Updated style */}
                <div className="inline-flex self-start items-center max-w-fit rounded-lg bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-400 mb-4 gap-1">
                  <KeyRound className="h-4 w-4" />
                  <span>Ebb Pro</span>
                </div>
                {/* Removed CardTitle */}
                {/* Moved Description below price */}
                <div className="flex items-baseline justify-start gap-2 pt-4">
                   <span className="text-5xl font-bold">$37</span>
                   <span className="text-xl text-muted-foreground">one-time</span>
                </div>
                 <CardDescription className="mt-1">Your copy forever & one year of updates</CardDescription> {/* Moved here, added mt-1 */}
                 <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6">Get Started</Button>
              </CardHeader>
              <CardContent className="flex flex-col items-start space-y-6 pt-2">
                {/* Feature List - Moved up */}
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 w-full px-0 md:px-0">
                  {/* Feature list items... */}
                  {[paidFeatures[0], paidFeatures[1], paidFeatures[2]].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {[paidFeatures[3], paidFeatures[4], paidFeatures[5]].map((feature, index) => (
                    <li key={index + 3} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Social Proof & Guarantee Row */}
                <div className="flex items-center w-full pt-4 gap-24">
                  {/* Left Group: Avatars + Join Text */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex -space-x-2 overflow-hidden self-start">
                      {proAvatars.slice(0, 4).map((src: string, index: number) => (
                        <Avatar key={index} className="inline-block h-8 w-8 rounded-full ring-2 ring-background">
                          <AvatarImage src={src} alt={`Pro user ${index + 1}`} />
                          <AvatarFallback>{`P${index + 1}`}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground self-start">Join thousands of pros</p>
                  </div>
                   {/* Right Side: Guarantee Card */}
                   <div className="flex items-center gap-2 rounded-lg bg-card/30 p-3"> {/* Guarantee container */}
                     <BadgeCheck className="h-6 w-6 text-blue-400 flex-shrink-0" /> {/* Light blue icon */}
                     <p className="text-sm text-muted-foreground leading-tight"> {/* Guarantee text with line break */} 
                       30-day money<br />back guarantee
                     </p>
                   </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start space-y-4 pt-0"> {/* Removed button, adjusted pt */}
                 {/* Footer is now potentially empty */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 