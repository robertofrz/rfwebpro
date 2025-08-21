"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "How long does it take to build my website?",
    answer:
      "Most projects take 1–4 weeks depending on the plan you choose and how quickly you provide content and feedback.",
  },
  {
    question: "Do I need to provide my own content?",
    answer:
      "For the Essential plan, yes. For the Professional and Complete plans, I help create strategic content (text and images) that resonates with your audience.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "You’ll see and approve each step (wireframe, prototype) before development starts, so there are no surprises. Revisions are included to make sure you’re happy.",
  },
  {
    question: "What if I need more than one revision?",
    answer:
      "Each plan includes a specific number of revision rounds. Extra revisions are possible for an additional cost, but I’ll guide you to make sure we get everything right the first time.",
  },
  {
    question: "Will my site be mobile-friendly?",
    answer:
      "Yes, all websites I create are fully responsive, meaning they look great on phones, tablets, and desktops.",
  },
  {
    question: "Will my site be SEO-friendly?",
    answer:
      "Yes! SEO (Search Engine Optimization) simply means making your website easy for Google to find and rank. I apply best practices like fast loading speed, mobile optimization, and clean structure so your site has the best chance to show up in search results.",
  },
  {
    question: "Will I be able to edit the site myself after it's done?",
    answer:
      "Only the Complete Plan includes a content management system (CMS), which lets you make updates without code. If that’s something you want, I recommend going with the Complete plan.",
  },
  {
    question: "What happens after launch?",
    answer:
      "All plans include post-launch support: 7 days for Essential, 15 days for Professional, and 30 days for Complete. You can also subscribe to the Monthly Care Plan for ongoing updates and support.",
  },
  {
    question: "Can you host my website?",
    answer:
      "Yes, hosting is free and included for life via Vercel, and all plans come with 1 year of domain registration.",
  },
  {
    question: "What’s not included in the price?",
    answer:
      "Advanced features like e-commerce, complex animations, multilingual support, or custom integrations are not included in the base plans, but we can add them for an additional cost if needed.",
  },
  {
    question: "How do payments work?",
    answer:
      "To start, you pay 50% up front after signing the agreement. The remaining 50% is due once the project is completed and you’re fully satisfied.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-blue">
      <div className="section-width py-20 flex flex-col items-center justify-center gap-16 pt-35">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="oswald uppercase text-lg text-neutral-400 tracking-widest mb-2">
            Frequently Asked Questions
          </h2>
          <h3 className="max-w-full md:max-w-xl oswald uppercase leading-[1] tracking-[-0.0625rem] text-4xl sm:text-5xl font-semibold text-white mb-4">
            Let's Clear Things Up
          </h3>
          <p className="text-lg lg:text-base max-w-full md:max-w-xl text-white/80">
            Got questions? This FAQ was created to answer the most common things
            clients ask before starting a project. And if you don’t see your
            question here, no worries, I’m always just a message away and happy
            to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full max-w-3xl flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="text-neutral-800 w-full text-left px-5 py-4 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 flex justify-between text-lg items-center oswald uppercase font-semibold cursor-pointer"
              >
                {item.question}
                {/* Ícones do Lucide */}
                {openIndex === index ? (
                  <ChevronUp
                    className="w-6 h-6 text-blue font-bold"
                    strokeWidth={3}
                  />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue" strokeWidth={3} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-neutral-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="text-blue oswald font-medium bg-lightblue tracking-[0.0625rem] text-lg py-3 px-9 rounded-lg uppercase shadow-md cursor-pointer hover:shadow-lg hover:scale-101 transition-colors duration-300 active:scale-99"
        >
          Get In Touch
        </Link>
      </div>
    </main>
  );
}
