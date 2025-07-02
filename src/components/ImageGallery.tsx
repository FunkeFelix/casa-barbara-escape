import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const ImageGallery: React.FC = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      alt: 'Living room with comfortable seating and modern furnishings'
    },
    {
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      alt: 'Stunning mountain and river views from La Manga Club'
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      alt: 'Mediterranean Sea waves and coastal beauty'
    },
    {
      src: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80',
      alt: 'Local wildlife and nature experiences near Casa Barbara'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <ScrollReveal key={index} delay={index * 100}>
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ImageGallery;