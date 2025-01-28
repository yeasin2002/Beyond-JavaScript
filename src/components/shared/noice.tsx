import { cn } from '@/utils';
import React from 'react';

type NoiceProps = React.ComponentPropsWithRef<'div'>;

export const Noice = ({ children, className, ...props }: NoiceProps) => {
  return (
    <div
      {...props}
      className={cn(
        "relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')] before:opacity-[0.05] before:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
};
