import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from 'lucide-react'

const testimonials = [
  {
    quote: "Exposed my fake working. Why does it have to show me how much time I spent creating versus consuming?",
    name: "@camden_bean",
    title: "random VC dude",
    avatar: "/images/camden.jpg",
    stars: 1,
  },
  {
    quote: "I just realized how much work I have to get done and got depressed. Thanks I guess…",
    name: "@imRazvanBadea",
    title: "agency bro",
    avatar: "/images/razvan.jpg",
    stars: 1,
  },
    {
    quote: "Thanks to Ebb, I actually got ahead of schedule. Now my entire team is asking me for help. Worst mistake ever.",
    name: "@strwbcom",
    title: "good fruit",
    avatar: "/images/strw.jpg",
    stars: 1,
  },
  {
    quote: "This app is honestly pretty good, but I can't give my husband anything more than 1 star.",
    name: "@samanthacovey",
    title: "supportive wife of 1 of the founders",
    avatar: "/images/samantha.jpg",
    stars: 1,
  },
  {
    quote: "Honestly sucks, now I can't doom-scroll on socials instead of working",
    name: "@AdamBartas",
    title: "engineer turned designer",
    avatar: "/images/adam.jpg",
    stars: 1,
  },
   {
    quote: "As a new attorney, I expected to be drowning in work. Instead, Ebb helped me get ahead which unfortunately gave me time to start building slop.",
    name: "@rshlsc",
    title: "idk what to put here",
    avatar: "/images/rshlsc.jpg",
    stars: 1,
  },
  {
    quote: "ebb makes me actually do things. Productively. How rude!",
    name: "@schutzsmith",
    title: "cracked dev",
    avatar: "/images/daniel.jpg",
    stars: 1,
  },
  {
    quote: "Ebb has completely ruined my work-life balance. Now I'm completing all my work and don't have an excuse to not spend time with my wife. She keeps asking for date nights and weekend trips. I miss my deadlines and late-night panics.",
    name: "@swanagan",
    title: "state guitar champ x2",
    avatar: "/images/swanagan.jpg",
    stars: 1,
  },
  {
    quote: "Ebb helped me understand that I was spending too much time scrolling X on my work laptop. I now use my phone and my metrics are great!",
    name: "@Hiccup_za",
    title: "QA engineer",
    avatar: "/images/chris.jpg",
    stars: 1,
  },
  {
    quote: "Be careful! I turned this on and focused so hard that lasers shot out of my eyes and burned through my laptop screen! Dangerous and absolutely no disclaimer about this!! Honestly the ONLY reason I'm not giving zero stars is because apparently before I blacked out in focus mode I vibe-coded a startup and sold it? So now I have $1.5M to replace my laptop.",
    name: "@beardedbestie",
    title: "SaaS & GTM nerd",
    avatar: "/images/grant.jpg",
    stars: 1,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[var(--primary)]">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-muted-foreground/50'}`} />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-violet-400/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/4 left-2/3 w-80 h-80 bg-violet-300/10 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">1 star reviews</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by founders and creatives who love creating slop.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8 space-y-6 lg:space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="break-inside-avoid mb-6 lg:mb-8">
              <CardHeader className="pb-2">
                 <StarRating rating={testimonial.stars} />
              </CardHeader>
              <CardContent className="pt-0">
                <blockquote className="text-base text-foreground/90 pt-4">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pt-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 