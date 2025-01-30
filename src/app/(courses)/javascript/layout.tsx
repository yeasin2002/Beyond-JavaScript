import { ContentSidebar } from '@/components/shared/content-sidebar';
import { javaScriptContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const JSInterviewQuestion = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ContentSidebar menu={javaScriptContent}>{children}</ContentSidebar>
    </>
  );
};

export default JSInterviewQuestion;
