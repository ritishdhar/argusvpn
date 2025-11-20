import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is Truthlens AI and how does it work?",
        answer: "Truthlens AI is an explainable deepfake-detection web app that lets users upload a video or use their webcam to instantly check whether it's real, fake, or uncertain. It uses a multimodal AI pipeline combining appearance analysis (LNCLIP), frequency analysis (DCT artifacts), and audio-visual sync checking (SyncNet) to detect manipulations and generate an ensemble confidence score."
    },
    {
        question: "What file formats and video lengths are supported?",
        answer: "Truthlens AI supports common video formats including MP4, MOV, AVI, and WebM. You can upload videos of various lengths, and our system will analyze them frame-by-frame. For webcam analysis, we support real-time detection with instant feedback."
    },
    {
        question: "How accurate is the deepfake detection?",
        answer: "Our multimodal AI pipeline provides high accuracy by combining multiple detection methods. The system generates a confidence score and provides detailed visual evidence including heatmaps and frame-by-frame analysis. Results are categorized as real, fake, or uncertain based on the ensemble confidence score."
    },
    {
        question: "What information is shown in the results dashboard?",
        answer: "The results dashboard displays the verdict (real/fake/uncertain), confidence score, visual heatmaps highlighting suspicious areas, frame-by-frame evidence with timestamps, and detailed metadata about the analysis including which detection methods flagged potential issues."
    },
    {
        question: "Is my uploaded video data kept private?",
        answer: "Yes, we prioritize your privacy. Uploaded videos are processed securely and are not stored permanently. We use your data solely for analysis purposes and follow strict data protection protocols. For more details, please review our privacy policy."
    }
];

const Faq = () => {
  return (
    <section id="faq" className="bg-card faq-section section-reveal py-24 md:py-32">
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
