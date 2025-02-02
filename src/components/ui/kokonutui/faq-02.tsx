"use client";

import { cn } from '@/utils';
import { ChevronDown, Mail } from "lucide-react";
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.15,
                ease: "easeOut",
            }}
            className={cn(
                "group rounded-lg border-[0.5px] border-gray-200/50 dark:border-gray-800/50",
                "transition-all duration-200 ease-in-out",
                isOpen
                    ? "bg-linear-to-br from-white via-gray-50/50 to-white dark:from-white/5 dark:via-white/2 dark:to-white/5"
                    : "hover:bg-gray-50/50 dark:hover:bg-white/[0.02]"
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between gap-4"
            >
                <h3
                    className={cn(
                        "text-base font-medium transition-colors duration-200 text-left",
                        "text-gray-700 dark:text-gray-300",
                        isOpen && "text-gray-900 dark:text-white"
                    )}
                >
                    {question}
                </h3>
                <motion.div
                    animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "p-0.5 rounded-full shrink-0",
                        "transition-colors duration-200",
                        isOpen
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                    )}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.1,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                    >
                        <div className="px-6 pb-4 pt-2">
                            <motion.p
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                                {answer}
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function Faq02() {
    const faqs: Omit<FAQItemProps, "index">[] = [
        {
            question: "What makes your platform unique?",
            answer: "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
        },
        {
            question: "How does the pricing structure work?",
            answer: "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
        },
        {
            question: "How can I get started?",
            answer: "You can get started by signing up for a free trial. Once you've signed up, you'll have access to our platform's full range of features. You can also contact our support team for assistance.",
        },
    ];

    return (
      <section className="bg-linear-to-b w-full from-transparent via-gray-50/50 to-transparent py-16 dark:from-transparent dark:via-white/[0.02] dark:to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="bg-linear-to-r mb-3 from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:via-gray-100 dark:to-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Everything you need to know about our platform
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={cn('mx-auto mt-12 max-w-md rounded-lg p-6 text-center')}
          >
            <div className="mb-4 inline-flex items-center justify-center rounded-full p-1.5">
              <Mail className="h-4 w-4" />
            </div>
            <p className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Still have questions?
            </p>
            <p className="mb-4 text-xs text-gray-600 dark:text-gray-400">
              {`We're`} here to help you
            </p>
            <button
              type="button"
              className={cn(
                'rounded-md px-4 py-2 text-sm',
                'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
                'hover:bg-gray-800 dark:hover:bg-gray-100',
                'transition-colors duration-200',
                'font-medium'
              )}
            >
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>
    );
}

export default Faq02;
