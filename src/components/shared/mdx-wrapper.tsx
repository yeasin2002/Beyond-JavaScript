import { PropsWithChildren } from 'react';

export const MdxWrapper = ({ children }: PropsWithChildren) => {
  return <div className="prose">{children}</div>;
};
