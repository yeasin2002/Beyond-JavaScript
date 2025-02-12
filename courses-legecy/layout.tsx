import React, { PropsWithChildren } from 'react';
import { CourseNavbar } from './course-nav';

const CourseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CourseNavbar />
      {children}
    </>
  );
};

export default CourseLayout;
