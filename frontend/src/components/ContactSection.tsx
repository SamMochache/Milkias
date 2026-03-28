import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Send, Loader2 } from 'lucide-react';
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 bg-base relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-theme -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <h2 className="font-display text-5xl md:text-7xl text-primary mb-6 leading-none">
              Let's <br />
              <span className="text-gold">Connect</span>
            </h2>
            <p className="text-secondary text-lg mb-10 max-w-md">
              Available for trials, scouting opportunities, and brand
              partnerships. Reach out directly or through the academy.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                  Representation
                </p>
                <p className="text-primary text-xl font-display tracking-wide">
                  Green Sports Academy
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                  Direct Email
                </p>
                <a
                  href="mailto:contact@milkiastekle.com"
                  className="text-primary text-xl font-display tracking-wide hover:text-gold transition-colors">
                  
                  contact@milkiastekle.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full border border-theme flex items-center justify-center text-primary hover:border-gold hover:text-gold hover:bg-gold/10 transition-all">
                
                  <Icon size={20} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="bg-surface p-8 md:p-10 border border-theme rounded-2xl">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs text-secondary uppercase tracking-widest">
                    
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-base border border-theme px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors rounded-lg" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs text-secondary uppercase tracking-widest">
                    
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-base border border-theme px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors rounded-lg" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs text-secondary uppercase tracking-widest">
                  
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-base border border-theme px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors appearance-none rounded-lg">
                  
                  <option>Scouting Inquiry</option>
                  <option>Media/Press</option>
                  <option>Sponsorship</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs text-secondary uppercase tracking-widest">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-base border border-theme px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors resize-none rounded-lg">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-gold text-black font-display text-lg uppercase tracking-wider py-4 flex items-center justify-center gap-2 hover:bg-[#F5C518] transition-colors disabled:opacity-70 rounded-lg">
                
                {isSubmitting ?
                <Loader2 className="animate-spin" size={20} /> :
                isSuccess ?
                <span>Message Sent</span> :

                <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}