import { ContentSidebar } from '@/components/shared/content-sidebar';
import { typeScriptContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const JSInterviewQuestion = ({ children }: PropsWithChildren) => {
  return <ContentSidebar menu={typeScriptContent}>{children}</ContentSidebar>;
};

export default JSInterviewQuestion;
