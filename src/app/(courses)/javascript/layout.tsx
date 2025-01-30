import { AppSidebar } from '@/components/shared/app-sidebar';
import {
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/shadcn/sidebar';
import { javaScriptContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const JSInterviewQuestion = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar menu={javaScriptContent} />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default JSInterviewQuestion;
