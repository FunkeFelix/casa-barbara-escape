import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Casa Barbara
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Your Mediterranean Escape
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Your Stay
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* About Casa Barbara */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                About Casa Barbara
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Nestled in the prestigious Los Millones at La Manga Club, Casa Barbara offers 
                  stylish interiors and bright living spaces that embody the essence of Mediterranean luxury.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  With two spacious terraces and spectacular panoramic views over La Manga and the 
                  Mediterranean Sea, this elegant apartment provides the perfect retreat for those 
                  seeking both relaxation and sophistication.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Featuring an ideal work-from-home environment with a dedicated workspace, 
                  Casa Barbara seamlessly blends leisure with productivity in an inspiring setting.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Casa Barbara interior"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities & Comforts */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Amenities & Comforts
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Spacious Accommodation", desc: "2 bedrooms and 2 bathrooms for comfortable living" },
              { title: "Fully Equipped Kitchen", desc: "Dishwasher, refrigerator, and complete cooking sets" },
              { title: "Modern Conveniences", desc: "Washing machine and all essential appliances" },
              { title: "Outdoor Paradise", desc: "2 sunny terraces for relaxation and al fresco dining" },
              { title: "Luxury Outdoor Kitchen", desc: "6-burner grill for memorable outdoor cooking experiences" },
              { title: "Dedicated Workspace", desc: "Comfortable desk area perfect for remote work" },
              { title: "Panoramic Views", desc: "Breathtaking vistas over La Manga Club to the Mediterranean" },
              { title: "Prime Location", desc: "Steps away from world-class golf and resort amenities" },
              { title: "Elegant Interiors", desc: "Stylish furnishings and bright, airy living spaces" }
            ].map((amenity, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                      {amenity.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {amenity.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                La Manga Club Excellence
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80"
                  alt="La Manga Club golf course"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Experience the renowned La Manga Club, one of Europe's premier resort destinations, 
                  featuring three championship golf courses that have hosted professional tournaments.
                </p>
                <div className="space-y-4">
                  {[
                    "Three championship golf courses",
                    "Tennis and padel courts",
                    "Luxury spa and wellness center",
                    "Private beaches and Mar Menor lagoon",
                    "Scenic nature trails and hiking",
                    "Rich marine wildlife experiences",
                    "Historic Cabo de Palos lighthouse"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities & Experiences */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Activities & Experiences
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Championship Golf", desc: "Play on world-renowned courses with stunning Mediterranean views" },
              { title: "Tennis & Padel", desc: "Professional courts for racquet sports enthusiasts" },
              { title: "Water Sports", desc: "Sailing, diving, and swimming in crystal-clear waters" },
              { title: "Wellness & Spa", desc: "Rejuvenating treatments and mud baths for ultimate relaxation" },
              { title: "Nature Exploration", desc: "Hiking trails with breathtaking coastal and mountain scenery" },
              { title: "Culinary Delights", desc: "Vibrant local cuisine and Mediterranean dining experiences" },
              { title: "Historic Discovery", desc: "Explore the iconic Cabo de Palos lighthouse and local heritage" },
              { title: "Wellness Retreats", desc: "Peaceful environment perfect for meditation and mindfulness" }
            ].map((activity, index) => (
              <ScrollReveal key={index} delay={index * 75}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {activity.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Visitors */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Perfect For Every Traveler
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Families", 
                desc: "Spacious accommodation with safe, family-friendly environments and activities for all ages",
                icon: "👨‍👩‍👧‍👦"
              },
              { 
                title: "Golf Enthusiasts", 
                desc: "Direct access to championship courses and professional facilities",
                icon: "⛳"
              },
              { 
                title: "Wellness Travelers", 
                desc: "Spa facilities, nature trails, and peaceful Mediterranean atmosphere",
                icon: "🧘‍♀️"
              },
              { 
                title: "Digital Nomads", 
                desc: "Dedicated workspace with inspiring views and reliable connectivity",
                icon: "💻"
              },
              { 
                title: "Northern Europeans", 
                desc: "Especially welcoming to British, German, Scandinavian, and Swiss guests",
                icon: "🇪🇺"
              },
              { 
                title: "Remote Workers", 
                desc: "Peaceful environment perfect for productivity and work-life balance",
                icon: "🏡"
              }
            ].map((visitor, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{visitor.icon}</div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                      {visitor.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {visitor.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Gallery
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Discover the beauty and elegance of Casa Barbara through these carefully curated images
              </p>
            </div>
          </ScrollReveal>
          
          <ImageGallery />
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Contact & Booking
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed text-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to experience the Mediterranean lifestyle at Casa Barbara? 
              Contact Barbara directly for availability, personalized recommendations, and reservations.
            </p>
            <p className="text-lg text-foreground/70 mb-10">
              We look forward to welcoming you to your perfect Mediterranean escape.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Barbara
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-playfair text-2xl font-semibold mb-4">Casa Barbara</h3>
          <p className="text-background/80 mb-4">Los Millones, La Manga Club, Spain</p>
          <p className="text-background/60 text-sm">
            Your Mediterranean Escape Awaits
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
