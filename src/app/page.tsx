import { Hero, Navbar, UserReview } from '@/components/Homepage';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UserReview />
    </main>
  );
}
