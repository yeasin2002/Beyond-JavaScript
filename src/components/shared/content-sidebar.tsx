'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/shadcn/accordion';
import { publicSans } from '@/fonts';
import { SidebarContentType } from '@/types';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/typography.css';

type Props = {
  menu: SidebarContentType[];
  children: React.ReactNode;
};

export function ContentSidebar({ menu, children }: Props) {
  return (
    <div className="container mx-auto grid h-[90vh] grid-cols-12 divide-x-4">
      <div className="col-span-2 overflow-y-auto overflow-x-hidden truncate bg-background pt-5">
        {menu.map(item => {
          return (
            <div
              key={item.name}
              className={`space-y-2 overflow-x-hidden px-4 ${publicSans.className}`}
            >
              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="capitalize">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pl-4">
                    {item?.content?.map((item, index) => (
                      <Link
                        key={index}
                        href={{ pathname: item.url }}
                        className="block truncate text-gray-100 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
      <div className="typography col-span-10 size-full px-3 py-4">
        {children}
      </div>
    </div>
  );
}
