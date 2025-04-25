import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Is Ebb available for all devices?",
    answer: "Ebb is only available on macOS at this time. Let us know if you'd like it on another platform!",
  },
  {
    question: "How does Ebb protect privacy?",
    answer: "Ebb is designed with privacy-first principles to ensure your sensitive data stays secure. Here's how we protect your privacy:\n\nLocal-Only Data Storage – Sensitive information like app names, window names, mouse movements, and keyboard interactions never leave your device and are not sent to our servers.\n\nMinimal Cloud Data – We only store necessary data (such as scores, sessions, streaks, and friends lists) to enhance your experience while keeping private data local.\n\nNo Data Selling – We never sell or share your personal information with third parties.\n\nOpen-Source Transparency – Our tracking engine is powered by CodeClimbers, an open-source project that allows full community visibility into how Ebb operates.", 
  },
  {
    question: "Is Ebb open-source?",
    answer: "Yes! Ebb is fully open source and you can choose to self host if you want. Our tracking engine is powered by CodeClimbers, an open-source project we maintain. This ensures transparency and allows the community to see how the tracking works.",
  },
  {
    question: "Do I need an internet connection to use Ebb?",
    answer: "Right now yes. But we are working on an offline mode!",
  },
    {
    question: "Do you give any discounts?",
    answer: "Because you had the diligence to get to this part of the website and read this question, here's a 10% off discount code: GOODJOB", 
  },
  {
    question: "Is mayonnaise an instrument?",
    answer: "No, mayonnaise is not an instrument.", 
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-75"></div>
        <div className="absolute top-[15%] left-[15%] w-64 h-64 bg-violet-400/10 rounded-full filter blur-2xl opacity-75"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Questions?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sounds like a skill issue.
            </p>
          </div>
           {/* Optional: Add Learn More button if needed */}
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="cursor-pointer">{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 