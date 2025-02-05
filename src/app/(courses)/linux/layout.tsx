import { ContentSidebar } from '@/components/shared/content-sidebar';
import { linuxContent } from '@/data/sidebar-content';
import React, { PropsWithChildren } from 'react';

const SqlPage = ({ children }: PropsWithChildren) => {
  return <ContentSidebar menu={linuxContent}>{children}</ContentSidebar>;
};

export default SqlPage;
