import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mia Bassey — Contortionist & Flexibility Coach',
  description:
    'Manchester-based contortionist, certified stretch & flexibility coach, and fitness influencer. Book Mia for performances, brand partnerships, and coaching.',
  keywords: [
    'Mia Bassey',
    'contortionist',
    'flexibility coach',
    'Manchester',
    'fitness influencer',
    'booking',
    'performance',
  ],
  openGraph: {
    title: 'Mia Bassey — Bent not Broken',
    description:
      'Certified Stretch & Flexibility Coach. Contortionist. Manchester-based performer available for bookings.',
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-black text-white antialiased">{children}</body>
    </html>
  );
}
