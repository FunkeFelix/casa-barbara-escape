import React, { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const base = import.meta.env.BASE_URL;

interface ImageItem {
  src: string;
  alt: string;
}

const imageData: { file: string; alt: string }[] = [
  { file: "bath_1.jpg", alt: "Modern bathroom 1" },
  { file: "bath_2.png", alt: "Stylish bathroom 2" },
  { file: "bedroom_1-1.jpg", alt: "Cozy bedroom 1" },
  { file: "bedroom_1.jpg", alt: "Bright room 1" },
  { file: "bedroom_2.jpg", alt: "Inviting room 2" },
  { file: "grill.jpg", alt: "Outdoor grill" },
  { file: "kitchen-2.jpg", alt: "Spacious kitchen 2" },
  { file: "kitchen.jpg", alt: "Fully equipped kitchen" },
  { file: "livingroom-1.jpg", alt: "Living room 1" },
  { file: "livingroom-2.jpg", alt: "Living room 2" },
  { file: "livingroom.jpg", alt: "Elegant living area" },
  { file: "Picture 2.png", alt: "Artful decor" },
  { file: "pool.png", alt: "Sparkling pool" },
  { file: "terrace_arial.png", alt: "Aerial terrace view" },
  { file: "terrace.jpg", alt: "Sunny terrace" },
  { file: "view-1.jpg", alt: "Scenic view 1" },
  { file: "view.jpg", alt: "Panoramic view" },
  { file: "workspace.jpg", alt: "Dedicated workspace" },
];

const ImageGallery: React.FC = () => {
  const [isGalleryMode, setGalleryMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: ImageItem[] = imageData.map(({ file, alt }) => ({
    src: `${base}images/${file}`,
    alt,
  }));

  const prevSlide = () =>
    setCurrentIndex((idx) => (idx - 1 + images.length) % images.length);

  const nextSlide = () => setCurrentIndex((idx) => (idx + 1) % images.length);

  return (
    <section className="py-16">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-10 space-x-4">
        <Button
          size="sm"
          className={`${!isGalleryMode ? "bg-primary text-primary-foreground" : "bg-secondary/20 text-foreground"}`}
          onClick={() => setGalleryMode(false)}
        >
          Slideshow
        </Button>
        <Button
          size="sm"
          className={`${isGalleryMode ? "bg-primary text-primary-foreground" : "bg-secondary/20 text-foreground"}`}
          onClick={() => setGalleryMode(true)}
        >
          Gallery
        </Button>
      </div>

      {/* Slideshow Mode */}
      {!isGalleryMode && (
        <Card className="mx-auto max-w-4xl shadow-lg overflow-hidden p-8">
          <CardContent className="p-0 relative bg-background">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-[24rem] object-cover rounded-lg transition-transform duration-300"
              loading="lazy"
            />

            {/* Nav Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-2xl rounded-full p-2 transition"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-2xl rounded-full p-2 transition"
            >
              ›
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    idx === currentIndex ? "bg-primary" : "bg-foreground/40"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Gallery Mode */}
      {isGalleryMode && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
