'use client';

import { useEffect } from 'react';

export function FileNames() {
  useEffect(() => {
    const codeElements = document.querySelectorAll(
      '[data-rehype-pretty-code-fragment]'
    );

    codeElements.forEach(element => {
      const fileName = element.querySelector('[data-rehype-pretty-code-title]');
      const fileNameContainer = element.querySelector(
        '[data-pretty-code-file-name]'
      );

      if (fileName && fileNameContainer) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fileNameContainer.innerText = fileName.innerText;
      }
    });
  }, []);

  return null;
}
