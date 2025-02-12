import { Button } from '@/components/ui/shadcn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="dark relative flex min-h-screen w-full flex-col items-center justify-center bg-black p-4">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]"
        style={{
          maskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, transparent 0%, black 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[800px] space-y-6 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-400">
            404 Error
          </div>
          <h1 className="mb-8 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-2 text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            পেজটি পাওয়া যায়নি
          </h1>
        </div>
        <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে৷ URL চেক
          করুন বা home ফিরে যান.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              home - এ ফিরে যান
            </Button>
          </Link>
          <Link
            href={'/javascript'}
            className="relative flex h-10 items-center rounded-md bg-zinc-800/50 px-4 text-sm text-zinc-400"
          >
            JavaScript শিখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
