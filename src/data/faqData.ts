export interface FAQItem {
  id: string;
  category: 'materials' | 'shipping' | 'returns' | 'bulk';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'materials', label: 'Quality & Sizing' },
  { id: 'shipping', label: 'Shipping & Delivery' },
  { id: 'returns', label: 'Returns & Payments' },
  { id: 'bulk', label: 'Wholesale & Custom' }
] as const;

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'materials',
    categoryLabel: 'Quality & Sizing',
    question: 'What makes CottonCanvas organic cotton different from conventional cotton?',
    answer: 'Our clothing is crafted from 100% GOTS-certified organic cotton grown without synthetic pesticides, chemical fertilizers, or genetically modified seeds. This gentle farming approach preserves the natural integrity of the cotton fibers, making the fabric softer, highly breathable, hypoallergenic, and exceptionally durable through hundreds of washes.'
  },
  {
    id: 'faq-2',
    category: 'materials',
    categoryLabel: 'Quality & Sizing',
    question: 'Will 100% cotton garments shrink when washed?',
    answer: 'All CottonCanvas fabrics are pre-shrunk and enzyme-washed during manufacturing to minimize post-purchase shrinkage. To maintain the exact fit and prevent any residual shrinkage, always wash in cold water (30°C / 85°F or lower) and line dry naturally. Avoid high-heat tumble drying.'
  },
  {
    id: 'faq-3',
    category: 'materials',
    categoryLabel: 'Quality & Sizing',
    question: 'How do I choose the best size for me?',
    answer: 'We design our clothing with modern relaxed and tailored fits. Each product page features exact garment dimensions for chest, shoulder, and length. If you prefer a classic tailored look, select your true size; for an oversized contemporary aesthetic, we recommend ordering one size up.'
  },
  {
    id: 'faq-4',
    category: 'shipping',
    categoryLabel: 'Shipping & Delivery',
    question: 'What are your delivery times and shipping costs?',
    answer: 'We offer free standard shipping on all orders over ₹999 across India. Orders are processed within 24 to 48 hours. Standard domestic delivery takes 3 to 5 business days, while express metro shipping arrives in 1 to 2 business days. A flat shipping fee of ₹99 applies to orders under ₹999.'
  },
  {
    id: 'faq-5',
    category: 'shipping',
    categoryLabel: 'Shipping & Delivery',
    question: 'How can I track my order once shipped?',
    answer: 'As soon as your package leaves our warehouse, you will receive an automated email and SMS notification containing your tracking ID and courier partner link. You can check the live tracking status at any time.'
  },
  {
    id: 'faq-6',
    category: 'returns',
    categoryLabel: 'Returns & Payments',
    question: 'What is your return and exchange policy?',
    answer: 'We provide a 30-day hassle-free return and exchange window from the date of delivery. Items must be unworn, unwashed, and returned in their original packaging with intact tags. Once initiated, our courier partner will arrange a free doorstep pickup.'
  },
  {
    id: 'faq-7',
    category: 'returns',
    categoryLabel: 'Returns & Payments',
    question: 'What payment methods do you accept?',
    answer: 'We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit and Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking across all major banks, and Cash on Delivery (COD) for eligible pin codes.'
  },
  {
    id: 'faq-8',
    category: 'bulk',
    categoryLabel: 'Wholesale & Custom',
    question: 'Do you offer bulk wholesale or custom screen-printed apparel?',
    answer: 'Yes! CottonCanvas partners with sustainable businesses, corporate teams, and creative brands for bulk orders, wholesale accounts, and custom organic screen-printing or embroidery. Contact our sales department via the Contact page or email aryansaini7105@gmail.com for bulk price tiers.'
  },
  {
    id: 'faq-9',
    category: 'bulk',
    categoryLabel: 'Wholesale & Custom',
    question: 'Are your dyes and packaging eco-friendly?',
    answer: 'Yes. We use exclusively OEKO-TEX certified non-toxic, low-impact water-based dyes that are safe for your skin and the environment. All orders are packed in 100% biodegradable and recyclable paper packaging, completely free of single-use plastics.'
  }
];
