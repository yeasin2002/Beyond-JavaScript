import { Copy } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f223130_1px,transparent_1px),linear-gradient(to_bottom,#1f223130_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      />

      <div className="container relative mx-auto px-4 py-32 text-center">
        {/* New Version Banner */}
        <div className="mb-8 inline-block">
          <div className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
            Nuxt UI v2.21 is out!
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
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
          <button className="hover:bg-foreground/90 rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors">
            Get Started
          </button>
          <div className="group relative">
            <button className="bg-brand-nuxt-green flex items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-sm text-black">
              <span>npx nuxi@latest module add ui</span>
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
