'use client';

import { ReactNode } from 'react';
import { StyleProvider, createCache } from '@ant-design/cssinjs';

const cache = createCache();

export default function AntdRegistry({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StyleProvider cache={cache} hashPriority="high">
      {children}
    </StyleProvider>
  );
}
