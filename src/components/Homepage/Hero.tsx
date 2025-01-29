import { Copy } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]"
        style={{
          maskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      />

      <div className="container relative mx-auto px-4 py-32 text-center">
        {/* New Version Banner */}
        <div className="mb-8 inline-block">
          <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Nuxt UI v2.21 is out!
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
          <span>A </span>
          <span className="text-primary">UI Library</span>
          <span> for</span>
          <br />
          <span>Modern Web Apps</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
          Nuxt UI simplifies the creation of stunning and responsive web
          applications with its comprehensive collection of fully styled and
          customizable UI components designed for Nuxt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors hover:bg-foreground/90">
            Get Started
          </button>
          <div className="group relative">
            <button className="flex items-center gap-2 rounded-lg bg-brand-nuxt-green px-4 py-2.5 font-mono text-sm text-black">
              <span>npx nuxi@latest module add ui</span>
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full bg-gradient-to-t from-white dark:from-background" />
    </div>
  );
}
