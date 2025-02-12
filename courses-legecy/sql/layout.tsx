import { ContentSidebar } from '@/components/shared/content-sidebar';
import { SQLContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const SqlPage = ({ children }: PropsWithChildren) => {
  return <ContentSidebar menu={SQLContent}>{children}</ContentSidebar>;
};

export default SqlPage;
