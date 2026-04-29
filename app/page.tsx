import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Location from '@/components/Location';

export const metadata: Metadata = {
  // Title and description are inherited from layout.tsx default
  // Just adding specific keywords or alternates if needed
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Location />
      <Contact />
    </main>
  );
}
