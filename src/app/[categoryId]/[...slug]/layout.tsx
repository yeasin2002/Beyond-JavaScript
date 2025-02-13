import { PropsWithChildren } from 'react';

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
      {children}
    </div>
  );
};

export default ContentLayout;
