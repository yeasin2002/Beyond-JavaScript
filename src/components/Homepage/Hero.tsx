import Image from 'next/image';
import Link from 'next/link';

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
        <div className="mb-8 inline-block">
          <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {`It's`} under maintenance
          </div>
        </div>

        <h1 className="mb-8 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
          <span>A </span>
          <span className="text-primary">UI Library</span>
          <span> for</span>
          <br />
          <span>Modern Web Apps</span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          ratione. Dicta voluptate nemo eius quidem animi culpa dolorem tempore
          dignissimos!
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={'/javascript'}
            className="flex items-center justify-center gap-x-2 rounded-lg bg-foreground px-8 py-2.5 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Image
              src="/assets/icons/javaScript.svg"
              alt="JavaScript"
              className="size-6"
              width={40}
              height={40}
            />
            JavaScript
          </Link>

          <Link
            className="flex items-center justify-center gap-x-1 rounded-lg bg-brand-nuxt-green px-8 py-2.5 font-mono font-medium text-black transition-colors hover:bg-brand-nuxt-green/90"
            href={'/reactjs'}
          >
            <Image
              src="/assets/icons/React-Dark.svg"
              alt="JavaScript"
              className="size-6"
              width={40}
              height={40}
            />
            React JS
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full bg-gradient-to-t from-white dark:from-background" />
    </div>
  );
}
