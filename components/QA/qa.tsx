import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location but generally take 7-14 business days.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email, phone, or live chat. We strive to respond to all inquiries within 24 hours.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or directly with the shipping carrier.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with SSL encryption.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes, we offer special pricing for bulk orders and wholesale customers. Please contact our sales team with details about your needs, and we'll provide you with a custom quote.",
  },
];

export default function QASection() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about our products and services
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-12 text-center p-6 bg-muted/50 rounded-lg border">
        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-4">
          Can&apos;t find the answer you&apos;re looking for? We&apos;re here to
          help.
        </p>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Contact Me
        </button>
      </div>
    </section>
  );
}
