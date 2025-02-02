interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const HomepageFAQ_data: Omit<FAQItemProps, 'index'>[] = [
  {
    question: 'What makes your platform unique?',
    answer:
      "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features."
  },
  {
    question: 'How does the pricing structure work?',
    answer:
      'We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.'
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.'
  },
  {
    question: 'How can I get started?',
    answer:
      "You can get started by signing up for a free trial. Once you've signed up, you'll have access to our platform's full range of features. You can also contact our support team for assistance."
  }
];
