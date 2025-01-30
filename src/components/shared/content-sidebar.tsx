'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/shadcn/accordion';
import { SidebarContentType } from '@/types';
import Link from 'next/link';
import * as React from 'react';

type Props = {
  menu: SidebarContentType[];
  children: React.ReactNode;
};

export function ContentSidebar({ menu, children }: Props) {
  return (
    <div className="flex h-screen divide-x-4">
      <div className="min-w-60 overflow-y-auto bg-background pt-5">
        {menu.map(item => {
          console.log(`item`, item);
          console.table({
            name: item.name,
            content: item?.content?.length
          });

          return (
            <div key={item.name} className="space-y-2 px-4">
              {!item?.content ? (
                <Link
                  href={{ pathname: item.url }}
                  className="block text-white hover:bg-gray-600"
                >
                  {item.name}
                </Link>
              ) : (
                <Accordion type="single" collapsible className="">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger> {item.name} </AccordionTrigger>
                    <AccordionContent>
                      {item?.content?.map((item, index) => (
                        <Link
                          key={index}
                          href={{ pathname: item.url }}
                          className="block truncate text-white hover:bg-gray-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          );
        })}
      </div>
      <div className="px-3">{children}</div>
    </div>
  );
}
