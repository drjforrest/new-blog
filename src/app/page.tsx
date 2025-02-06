'use client';

import { LineChart, ArrowRight, BarChart2, PieChart } from "lucide-react"
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Home() {
  const posts = getAllPosts()

  if (!posts) {
    console.error('No posts found')
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/africa_silhouette.svg')] bg-no-repeat bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 bg-accent/10 rounded-2xl">
                <LineChart className="w-10 h-10 text-accent" />
              </div>
              <div className="p-4 bg-primary/10 rounded-2xl">
                <BarChart2 className="w-10 h-10 text-primary" />
              </div>
              <div className="p-4 bg-success/10 rounded-2xl">
                <PieChart className="w-10 h-10 text-success" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              African Digital Development
            </motion.h1>
            <motion.p 
              className="text-xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Discover the growth of a continent through engaging data visualization 
              and compelling stories of 21st century solutions to decades-long challenges.
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
                  <div className="relative bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                                overflow-hidden border border-foreground/5 h-full
                                transform hover:-translate-y-2 hover:border-primary/20">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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
                <div className="relative bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                              overflow-hidden border border-primary/10 h-full
                              transform hover:-translate-y-2 hover:border-primary/30">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <LineChart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        Interactive Data Dashboards
                      </h3>
                    </div>
                    <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                      Explore our collection of interactive data visualizations that provide deeper insights 
                      into Africa's digital transformation journey through rich, multi-layered dashboards.
                    </p>
                    <div className="mt-4 inline-flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300">
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
    </div>
  )
}