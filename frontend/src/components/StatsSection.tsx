import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Target, Activity, Zap } from 'lucide-react';
const AnimatedCounter = ({
  value,
  suffix = '',
  duration = 2




}: {value: number;suffix?: string;duration?: number;}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      const end = value;
      const totalFrames = Math.round(duration * 60);
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * (1 - Math.pow(2, -10 * progress)));
        setCount(currentCount);
        if (frame === totalFrames) {
          setCount(end);
          clearInterval(counter);
        }
      }, 1000 / 60);
      return () => clearInterval(counter);
    }
  }, [isInView, value, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>);

};
const stats = [
{
  label: 'Matches Played',
  value: 90,
  icon: Activity
},
{
  label: 'Goals Scored',
  value: 48,
  icon: Target
},
{
  label: 'Assists',
  value: 30,
  icon: Zap
},
{
  label: 'Pass Accuracy',
  value: 89,
  suffix: '%',
  icon: Activity
}];

const achievements = [
'Academy Player of 2025',
'Top Scorer in Dhana Cup',
'Regional Youth Champion'];

export function StatsSection() {
  return (
    <section
      id="stats"
      className="py-24 bg-surface border-y border-theme relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-display text-5xl md:text-6xl text-primary mb-4">
            
            By The <span className="text-gold">Numbers</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-secondary max-w-2xl mx-auto">
            
            Exceptional performance metrics defining a rising star.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="bg-base p-6 md:p-8 border border-theme hover:border-gold/30 transition-colors group relative overflow-hidden">
            
              <div className="absolute top-0 left-0 w-1 h-full bg-gold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <stat.icon className="text-gold/50 w-8 h-8 mb-4 group-hover:text-gold transition-colors" />
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm text-secondary uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
              <Trophy className="text-gold w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-primary mb-2">
                Trophy Cabinet
              </h3>
              <p className="text-secondary">Recent honors and recognition</p>
            </div>
          </div>

          <ul className="space-y-3 w-full md:w-auto">
            {achievements.map((achievement, i) =>
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3 + i * 0.1
              }}
              className="flex items-center gap-3 text-primary">
              
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span className="font-medium">{achievement}</span>
              </motion.li>
            )}
          </ul>
        </motion.div>
      </div>
    </section>);

}