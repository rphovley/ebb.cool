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
    answer: "Details about privacy protection...", // TODO: Add actual answer from site/source
  },
  {
    question: "Is Ebb open-source?",
    answer: "Details about open source...", // TODO: Add actual answer from site/source
  },
  {
    question: "Do I need an internet connection to use Ebb?",
    answer: "Details about internet connection...", // TODO: Add actual answer from site/source
  },
    {
    question: "Do you give any discounts?",
    answer: "Details about discounts...", // TODO: Add actual answer from site/source
  },
  {
    question: "Is mayonnaise an instrument?",
    answer: "Details about mayonnaise...", // TODO: Add actual answer from site/source
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-75"></div>
        <div className="absolute top-[15%] left-[15%] w-64 h-64 bg-violet-400/10 rounded-full filter blur-2xl opacity-75"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Questions?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sounds like a skill issue.
            </p>
          </div>
           {/* Optional: Add Learn More button if needed */}
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 