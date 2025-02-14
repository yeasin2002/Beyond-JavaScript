import {
  AboutMaintainer,
  Contributors,
  Footer,
  FrequentlyAskedQuestions,
  Hero,
  Navbar,
  UserReview
} from '@/components/Homepage';

import { ScatteredDotsBg } from '@/components/shared';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <UserReview />
      <div className="relative">
        <ScatteredDotsBg />
        <FrequentlyAskedQuestions />
        <AboutMaintainer />
        <Contributors />
      </div>
      <Footer />
    </main>
  );
}
