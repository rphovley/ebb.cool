import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for testimonials - replace with real data source if needed
const testimonials = [
  {
    quote: "Exposed my fake working. Why does it have to show me how much time I spent creating versus consuming?",
    name: "@camden_bean",
    title: "random VC dude",
    avatar: "/avatars/camden_bean.jpg", // Placeholder path
  },
  {
    quote: "I just realized how much work I have to get done and got depressed. Thanks I guess…",
    name: "@imRazvanBadea",
    title: "agency bro",
    avatar: "/avatars/razvan.jpg", // Placeholder path
  },
    {
    quote: "Thanks to Ebb, I actually got ahead of schedule. Now my entire team is asking me for help. Worst mistake ever.",
    name: "@strwbcom",
    title: "good fruit",
    avatar: "/avatars/strwbcom.jpg", // Placeholder path
  },
  {
    quote: "This app is honestly pretty good, but I can't give my husband anything more than 1 star.",
    name: "@samanthacovey",
    title: "Supportive wife of 1 of the founders",
    avatar: "/avatars/samantha.jpg", // Placeholder path
  },
  {
    quote: "Honestly sucks, now I can't doom-scroll on socials instead of working",
    name: "@AdamBartas",
    title: "engineer turned designer",
    avatar: "/avatars/adam.jpg", // Placeholder path
  },
   {
    quote: "As a new attorney, I expected to be drowning in work. Instead, Ebb helped me get ahead which unfortunately gave me time to start building slop.",
    name: "@rshlsc",
    title: "idk what to put here",
    avatar: "/avatars/rachel.jpg", // Placeholder path
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        {/* Multiple overlapping circles for blob effect */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-violet-400/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/4 left-2/3 w-80 h-80 bg-violet-300/10 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">1 star reviews</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by founders and creatives who love creating slop.
            </p>
          </div>
           <Button variant="link">Learn More</Button> { /* Link destination TBD */}
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <blockquote className="text-sm italic text-muted-foreground">
                  "{testimonial.quote}"
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