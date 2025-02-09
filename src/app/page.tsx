'use client';

import { LineChart, ArrowRight, BarChart2, BookOpen, ChartBar, Lightbulb } from "lucide-react"
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { CommentsSection } from '@/components/blog/comments-section';

export default function Home() {
  const posts = getAllPosts()

  if (!posts) {
    console.error('No posts found')
    return null
  }
  
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl"
            >
              African Digital Development
            </motion.h1>

            {/* Icon Banner */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center items-center gap-16 md:gap-24 mt-12 mb-8"
            >
              <motion.div 
                className="flex flex-col items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="p-4 rounded-lg bg-surface-elevated shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <BookOpen className="w-8 h-8 text-[#26385C]" />
                </div>
                <span className="text-sm text-foreground/70 max-w-[120px] text-center">
                  Research-focussed narratives
                </span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="p-4 rounded-lg bg-surface-elevated shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ChartBar className="w-8 h-8 text-[#E63946]" />
                </div>
                <span className="text-sm text-foreground/70 max-w-[120px] text-center">
                  Data-driven insights
                </span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="p-4 rounded-lg bg-surface-elevated shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Lightbulb className="w-8 h-8 text-[#2A9D8F]" />
                </div>
                <span className="text-sm text-foreground/70 max-w-[120px] text-center">
                  Innovative approaches to analyses
                </span>
              </motion.div>
            </motion.div>

            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-lg text-foreground/80"
            >
              Discover the growth of a continent through engaging data visualization 
              and compelling narratives of 21st-century solutions to decades-long challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                                transition-all duration-300 overflow-hidden border border-primary/10 h-full
                                transform hover:-translate-y-2 hover:border-primary/20">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-foreground/60">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Interactive Dashboards Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link 
                href="/bonus"
                className="group block h-full"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
                              transition-all duration-300 overflow-hidden border border-primary/10 h-full
                              transform hover:-translate-y-2 hover:border-primary/20">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <LineChart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">
                        Bonus Content: Interactive Data Dashboards
                      </h3>
                    </div>
                    <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                      Explore an overflow collection of interactive data visualizations that provide deeper insights 
                      into Africa's digital transformation journey through rich, multi-layered dashboards.
                    </p>
                    <div className="mt-4 inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
                      View Interactive Visualizations
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="py-24 bg-background border-t border-primary/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Leave a Comment
          </h2>
          <CommentsSection />
        </div>
      </motion.section>
    </div>
  )
}