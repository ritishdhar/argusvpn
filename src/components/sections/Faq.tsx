import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is a VPN and why do I need one?",
        answer: "A VPN (Virtual Private Network) is a service that encrypts your internet traffic and routes it through a secure server. This protects your online privacy, secures your data from hackers, and allows you to bypass geo-restrictions to access content from anywhere in the world."
    },
    {
        question: "How many devices can I use with Argus VPN?",
        answer: "With a single Argus VPN subscription, you can connect up to 6 devices simultaneously. We offer dedicated apps for all major platforms, including Windows, macOS, iOS, Android, and Linux."
    },
    {
        question: "Do you keep logs of my activity?",
        answer: "No, we have a strict no-logs policy. We are committed to your privacy, which means we never track, collect, or share your private data. Your online activity is for your eyes only."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee on all our plans. If you're not completely satisfied with our service, you can request a full refund within the first 30 days of your purchase, no questions asked."
    },
    {
        question: "How can I get customer support?",
        answer: "Our customer support team is available 24/7 to help you with any questions or issues. You can reach us via live chat on our website or by emailing support@argus-vpn.com. We're always here to help."
    }
];

const Faq = () => {
  return (
    <section className="py-16 md:py-24 bg-card faq-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="border-b border-border faq-item">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
