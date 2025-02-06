'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

interface ChartWrapperProps {
  title: string;
  description?: string;
  infoTooltip?: string;
  className?: string;
  children: React.ReactNode;
}

export function ChartWrapper({
  title,
  description,
  infoTooltip,
  className = '',
  children
}: ChartWrapperProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1.5">
                {description}
              </CardDescription>
            )}
          </div>
          {infoTooltip && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-foreground/40 hover:text-foreground cursor-help"
              title={infoTooltip}
            >
              <Info className="w-5 h-5" />
            </motion.div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full aspect-[16/9]">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}