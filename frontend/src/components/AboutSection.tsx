import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-base relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="relative order-first lg:order-none">
            
            <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 -z-10 hidden md:block" />

            {/* Portrait Placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden bg-surface border border-theme flex flex-col items-center justify-center text-secondary group">
              <div className="absolute inset-0 border-2 border-dashed border-theme-strong m-4 rounded-xl transition-colors group-hover:border-gold/50" />
              <Camera
                size={48}
                className="mb-4 opacity-50 group-hover:text-gold transition-colors" />
              
              <p className="font-display text-xl tracking-widest uppercase">
                Upload Portrait
              </p>

              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="font-display text-2xl text-primary">
                  Milkias Tekle
                </p>
                <p className="text-gold text-sm uppercase tracking-widest">
                  Midfielder • #6
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-display text-5xl md:text-6xl text-primary">
                The <span className="text-gold">Journey</span>
              </h2>
            </div>

            <div className="space-y-6 text-secondary font-light leading-relaxed text-lg">
              <p>
                At just 13 years old, Milkias Tekle has already established
                himself as a standout talent in the Green Sports Academy system.
                Wearing the number 6 jersey, he commands the midfield with a
                level of composure and tactical awareness rarely seen in players
                his age.
              </p>
              <p>
                Standing at 5 feet, Milkias uses his low center of gravity,
                quick feet, and exceptional vision to dictate the tempo of the
                game. His ability to break lines with precise passing and his
                relentless work rate make him the engine of his team.
              </p>

              <blockquote className="border-l-2 border-gold pl-6 py-2 my-8 italic text-xl text-primary font-medium">
                "I play every match with passion and focus. The midfield is
                where the game is won, and I want to control it."
              </blockquote>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-theme">
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                    Age
                  </p>
                  <p className="font-display text-2xl text-primary">13 Years</p>
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                    Academy
                  </p>
                  <p className="font-display text-2xl text-primary">
                    Green Sports
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                    Position
                  </p>
                  <p className="font-display text-2xl text-primary">
                    Midfielder
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                    Height
                  </p>
                  <p className="font-display text-2xl text-primary">5 Feet</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}