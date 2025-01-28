import { Hero, Navbar } from '@/components/Homepage';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
