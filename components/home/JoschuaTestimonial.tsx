import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon, ExternalLink } from 'lucide-react'
import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[var(--primary)]">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-muted-foreground/50'}`} />
      ))}
    </div>
  )
}

export function JoschuaTestimonial() {
  return (
    <section className="relative w-full py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-violet-400/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/4 left-2/3 w-80 h-80 bg-violet-300/10 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Review</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From a verified user who actually paid for the premium version
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-2xl space-y-6">
          <Link 
            href="https://x.com/JoschuaBuilds/status/1954932153738809659" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="break-inside-avoid mb-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-card/30 cursor-pointer border-border/50 hover:border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <StarRating rating={1} />
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-base text-foreground/90 pt-4">
                  💪 deleted the premium version after testing it out for 1 day
                  <br />
                  hate it
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pt-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/images/joschua.jpg" alt="Joschua Sutee" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      Joschua Sutee
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">@JoschuaBuilds</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
          
          <Link 
            href="https://x.com/JoschuaBuilds/status/1954936214290907348" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="break-inside-avoid mb-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-card/30 cursor-pointer border-border/50 hover:border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <StarRating rating={1} />
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-base text-foreground/90 pt-4">
                  🙏 and I mean it!
                  <br />
                  I am currently living off savings so why would have I bought it :/
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pt-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/images/joschua.jpg" alt="Joschua Sutee" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      Joschua Sutee
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-xs text-muted-foreground">@JoschuaBuilds</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JoschuaTestimonial