'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LineChart, BookOpen } from 'lucide-react';

export function PageNav() {
  const pathname = usePathname();
  
  const pageLinks = [
    {
      href: "/",
      icon: BookOpen,
      label: "Overview",
    },
    {
      href: "/african-digital-development",
      icon: LineChart,
      label: "Featured Series",
    },
  ];

  return (
    <nav className="sticky top-16 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 h-12">
          {pageLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2 text-sm font-medium
                  ${isActive 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-foreground'
                  }
                  transition-colors relative
                `}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 