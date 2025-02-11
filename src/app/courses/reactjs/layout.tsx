import { ContentSidebar } from '@/components/shared/content-sidebar';
import { reactjsContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const ReactPage = ({ children }: PropsWithChildren) => {
  return <ContentSidebar menu={reactjsContent}>{children}</ContentSidebar>;
};

export default ReactPage;
