import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Presentation, Clock } from 'lucide-react';
import { useState } from 'react';

interface PresentationCardProps {
    title: string;
    description: string;
    duration: string;
    date: string;
    href: string;
    imageUrl?: string;
}

export function PresentationCard({
    title,
    description,
    duration,
    date,
    href,
    imageUrl
}: PresentationCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative"
        >
            <Link href={href}>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 overflow-hidden border border-primary/10
                            transform hover:-translate-y-2 hover:border-primary/20">
                    <div className="h-48 overflow-hidden bg-primary/5">
                        {imageUrl && !imageError ? (
                            <Image 
                                src={imageUrl}
                                alt={title}
                                width={400}
                                height={200}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/10">
                                <Presentation className="w-12 h-12 text-primary/40" />
                            </div>
                        )}
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                <Presentation className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                                {title}
                            </h3>
                        </div>
                        <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300 mb-4">
                            {description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-foreground/60">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{duration}</span>
                            </div>
                            <time dateTime={date}>
                                {new Date(date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}