'use client';

import React from 'react';
import { ResponsiveContainer as RechartsContainer } from 'recharts';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  aspectRatio?: number;
  minHeight?: number;
}

export function ResponsiveContainer({
  children,
  aspectRatio = 16/9,
  minHeight = 300,
}: ResponsiveContainerProps) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
        minHeight: `${minHeight}px`,
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}>
        <RechartsContainer width="100%" height="100%">
          {children}
        </RechartsContainer>
      </div>
    </div>
  );
}