import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
const images = [
{
  id: 1,
  url: 'https://images.unsplash.com/photo-1518605368461-1e1e38ce7058?q=80&w=2070&auto=format&fit=crop',
  span: 'md:col-span-2 md:row-span-2'
},
{
  id: 2,
  url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop',
  span: 'md:col-span-1 md:row-span-1'
},
{
  id: 3,
  url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop',
  span: 'md:col-span-1 md:row-span-1'
},
{
  id: 4,
  url: 'https://images.unsplash.com/photo-1431324155629-1a6d0a6eb434?q=80&w=2067&auto=format&fit=crop',
  span: 'md:col-span-1 md:row-span-2'
},
{
  id: 5,
  url: 'https://images.unsplash.com/photo-1551280857-2b9bbe520442?q=80&w=2070&auto=format&fit=crop',
  span: 'md:col-span-2 md:row-span-1'
}];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 bg-surface border-t border-theme">
      <div className="container mx-auto px-6 md:px-12">
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
            
            Visual <span className="text-gold">Diary</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) =>
          <motion.div
            key={img.id}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className={`relative group overflow-hidden bg-base cursor-pointer rounded-xl ${img.span}`}
            onClick={() => setSelectedImage(img.url)}>
            
              <img
              src={img.url}
              alt={`Gallery image ${img.id}`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              loading="lazy" />
            
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          
            <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}>
            
              <X size={32} />
            </button>
            <motion.img
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.9,
              opacity: 0
            }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}