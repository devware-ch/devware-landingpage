import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User2, UserCircle2, Users2 } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  items: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const Faq3 = ({
  items,
  supportHeading,
  supportDescription,
  supportButtonText,
  supportButtonUrl,
}: Faq3Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white/90 dark:bg-[#0F1322]/90 backdrop-blur-sm rounded-[32px] border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group flex items-center">
                  <div className="text-left font-medium text-neutral-900 dark:text-white lg:text-lg group-hover:text-[#3B82F6] transition-colors">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="text-neutral-600 dark:text-neutral-400 lg:text-lg whitespace-pre-line">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center rounded-[32px] bg-neutral-300/90 dark:bg-neutral-700/90 backdrop-blur-sm p-8 text-center">
          <div className="relative mb-6">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border-2 border-neutral-200 dark:border-neutral-800 md:mb-5 bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
              <User2 className="size-8 text-neutral-900 dark:text-white" />
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border-2 border-neutral-200 dark:border-neutral-800 md:mb-5 bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
              <User2 className="size-8 text-neutral-900 dark:text-white" />
            </Avatar>
            <Avatar className="mb-4 size-16 border-2 border-neutral-200 dark:border-neutral-800 md:mb-5 bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
              <User2 className="size-8 text-neutral-900 dark:text-white" />
            </Avatar>
          </div>
          <h3 className="mb-2 text-xl font-syne font-semibold text-neutral-900 dark:text-white lg:text-2xl">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-neutral-600 dark:text-neutral-400 lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button
              className="bg-[#0F1322] dark:bg-white text-white dark:text-[#0F1322] hover:bg-[#0F1322]/90 dark:hover:bg-white/90 rounded-full px-8"
              onClick={() => scrollToSection("contact")}
            >
              {supportButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq3 };
