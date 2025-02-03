'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/shadcn/accordion';
import { publicSans } from '@/fonts';
import { anekBangla } from '@/fonts/Bengali.fonts';
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
    <div className="container mx-auto flex h-[90vh] !w-full divide-x-4">
      <div className="min-w-60 overflow-x-hidden truncate bg-background pt-5">
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
                    {item?.content?.map((subContent, index) => (
                      <Link
                        key={index}
                        href={{ pathname: item.baseUrl + subContent.url }}
                        className="block truncate text-gray-100 hover:text-gray-200"
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

      <div className={`py-4 pl-4 ${anekBangla.className} `}>{children}</div>
    </div>
  );
}
