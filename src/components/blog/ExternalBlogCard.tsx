import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ExternalBlogCardProps {
  title: string;
  description: string;
  href: string;
  date?: string;
}

export function ExternalBlogCard({ title, description, href, date }: ExternalBlogCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                      transition-all duration-300 overflow-hidden border border-primary/10 h-full
                      transform hover:-translate-y-2 hover:border-primary/20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                {title}
              </h3>
              <ExternalLink className="w-5 h-5 text-primary/60 group-hover:text-primary/80 transition-colors duration-300" />
            </div>
            <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
              {description}
            </p>
            {date && (
              <div className="mt-4 flex items-center text-sm text-foreground/60">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}