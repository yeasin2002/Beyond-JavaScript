import { CheckCircle2 } from 'lucide-react';

export default function Alert03() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="shadow-xs relative overflow-hidden rounded-lg border border-emerald-300 bg-emerald-100 p-4 dark:border-emerald-800/30 dark:bg-emerald-950/20">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald-200 p-1 dark:bg-emerald-900/50">
            <CheckCircle2 className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
          </div>
          <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
            Saved to database
          </p>
        </div>
      </div>
    </div>
  );
}
