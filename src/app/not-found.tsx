import { Button } from '@/components/ui/shadcn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="dark relative flex min-h-screen w-full flex-col items-center justify-center bg-black p-4">
      {/* Grid Background */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(55, 55, 55, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(55, 55, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[800px] space-y-6 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-400">
            404 Error
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl/none">
            Page Not Found
          </h1>
        </div>
        <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The page {"you're"} looking for {"doesn't"} exist or has been moved.
          Please check the URL or return home.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              Return Home
            </Button>
          </Link>
          <Link
            href={'/js-interview-questions'}
            className="relative flex h-10 items-center rounded-md bg-zinc-800/50 px-4 text-sm text-zinc-400"
          >
            npm run dev
          </Link>
        </div>
      </div>
    </div>
  );
}
