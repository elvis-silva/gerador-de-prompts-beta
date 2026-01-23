'use client';

import React, { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/lib/Cache';
import { useServerInsertedHTML } from 'next/navigation';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState<Entity>(() => createCache());

  // Injeta os estilos no <head> durante o Server-Side Rendering
  useServerInsertedHTML(() => (
    <script
      dangerouslySetInnerHTML={{
        __html: `</script>${extractStyle(cache)}<script>`,
      }}
    />
  ));

  return (
    <StyleProvider cache={cache}>
      {children}
    </StyleProvider>
  );
}