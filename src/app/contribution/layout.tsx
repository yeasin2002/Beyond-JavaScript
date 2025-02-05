import React, { PropsWithChildren } from 'react';

const ContributionLayout = ({ children }: PropsWithChildren) => {
  return <main className="mdx-wrapper p-10"> {children} </main>;
};

export default ContributionLayout;
