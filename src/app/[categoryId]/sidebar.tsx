'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/shadcn/accordion';
import { publicSans } from '@/fonts';
import { anekBangla } from '@/fonts/bengali.fonts';
import Link from 'next/link';
import * as React from 'react';

type Menu = {
  id: string;
  name: string;
  url: string;
};

type Props = {
  menu: (Menu & { contents: Menu[] })[];
  children: React.ReactNode;
  hideSidebar?: boolean;
};

export function ContentSidebar({ menu, hideSidebar = false, children }: Props) {
  return (
    <div className="container mx-auto flex min-h-svh !w-full divide-x-2">
      {hideSidebar ? null : (
        <div className="scrollbar-thin sticky top-0 h-svh min-w-60 !overflow-y-auto truncate bg-background pt-5">
          {menu.map(item => {
            return (
              <div
                key={item.name}
                className={`space-y-2 overflow-x-hidden px-4 ${publicSans.className}`}
              >
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="truncate capitalize">
                      {item.name}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 pl-4">
                      {item?.contents?.map((subContent, index) => (
                        <Link
                          key={index}
                          href={{ pathname: subContent.url }}
                          className="block truncate capitalize text-gray-100 hover:text-gray-200"
                        >
                          {subContent.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      )}

      <div className={`py-4 pl-4 ${anekBangla.className} `}>
        {children}

        {hideSidebar && (
          <div className="py-36 text-center text-xl">
            এ সম্পর্কিত কনটেন্ট বর্তমানে নেই, শীঘ্রই আসবে । আপনি যদি লিখতে
            ইচ্ছুক হন তাহলে যোগাযোগ করতে পারেন ।{' '}
          </div>
        )}
      </div>
    </div>
  );
}
