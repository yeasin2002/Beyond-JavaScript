import React, { PropsWithChildren } from 'react';
import {
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/shadcn/sidebar';
import { AppSidebar } from '@/components/shared/app-sidebar';

const JSInterviewQuestion = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default JSInterviewQuestion;
