'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, MapPin, UserCircle2, Send } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  location: string;
  content: string;
  date: string;
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.content.trim()) return;

    setIsSubmitting(true);
    
    // Here you would make an API call to save the comment
    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      location: formData.location,
      content: formData.content,
      date: new Date().toISOString()
    };

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulating API call
      
      setComments(prev => [newComment, ...prev]);
      setFormData({ name: '', location: '', content: '' });
    } catch (error) {
      console.error('Failed to post comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-8 py-12">
      <h2 className="text-2xl font-bold text-primary text-center mb-8">Community Reel</h2>
      
      {/* Comment Form */}
      <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary">Share Your Thoughts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                Name or Alias
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/10 
                         focus:outline-none focus:border-primary/20 focus:ring-1 focus:ring-primary/20
                         text-foreground/80 placeholder:text-foreground/50"
                placeholder="How should we call you?"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                Location (optional)
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-primary/10 
                         focus:outline-none focus:border-primary/20 focus:ring-1 focus:ring-primary/20
                         text-foreground/80 placeholder:text-foreground/50"
                placeholder="Where are you from?"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-1.5">
              Your Message
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Share your thoughts, experiences, or feedback..."
              className="w-full h-32 px-4 py-3 rounded-lg bg-background/50 border border-primary/10 
                       focus:outline-none focus:border-primary/20 focus:ring-1 focus:ring-primary/20
                       text-foreground/80 placeholder:text-foreground/50 resize-none"
              required
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.name.trim() || !formData.content.trim()}
              className="bg-primary hover:bg-primary/90 text-background"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                  Posting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Post to Reel
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>

      {/* Comments Reel */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <UserCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{comment.name}</h4>
                        {comment.location && (
                          <p className="text-sm text-foreground/60 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {comment.location}
                          </p>
                        )}
                      </div>
                      <time className="text-sm text-foreground/60">
                        {new Date(comment.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {comments.length === 0 && (
          <div className="text-center py-8 text-foreground/60">
            No messages yet. Be the first to share your thoughts!
          </div>
        )}
      </div>
    </div>
  );
}