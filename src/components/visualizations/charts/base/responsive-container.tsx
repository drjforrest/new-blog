'use client';

import React from 'react';
import { ResponsiveContainer as RechartsContainer } from 'recharts';
import { motion } from 'framer-motion';

interface ResponsiveContainerProps {
  children: React.ReactElement;
  minHeight?: number;
  aspectRatio?: number;
  className?: string;
}

export function ResponsiveContainer({
  children,
  minHeight = 300,
  aspectRatio = 16/9,
  className = '',
}: ResponsiveContainerProps) {
  return (
    <div className={className}>
      <div style={{ 
        position: 'relative',
        width: '100%',
        paddingBottom: `${(1/aspectRatio) * 100}%`,
        minHeight: minHeight,
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
          <RechartsContainer width="100%" height="100%">
            {children}
          </RechartsContainer>
        </div>
      </div>
    </div>
  );
}