'use client';

import { useState } from 'react';
import { StyleProvider, createCache } from '@ant-design/cssinjs';

export default function AntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => createCache());

  return (
    <StyleProvider cache={cache}>
      {children}
    </StyleProvider>
  );
}