import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/terrace.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Casa Barbara
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Your Sporty Home Base at La Manga Club
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("amenities")?.offsetTop || 0,
                  behavior: "smooth",
                })
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Casa Barbara
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
                Welcome to Casa Barbara
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Tucked into the hillside community of Los Molinos at La Manga
                  Club, Casa Barbara is purpose‑built for active travellers.
                  Bright open‑plan living, fresh coastal colours and plenty of
                  natural light create an easy space to relax after a day on the
                  courts or fairways.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Two generous terraces invite you to refuel in the sun while
                  soaking up panoramic views across the resort, the Mar Menor
                  lagoon and the Mediterranean Sea.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  A dedicated high‑speed workspace lets you check in with the
                  office before heading out to your next match, round or coastal
                  adventure.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/terrace_arial.png"
                  alt="Casa Barbara exterior view"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities & Comforts */}
      <section className="py-20 px-4 bg-secondary/30" id="amenities">
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
              {
                title: "Spacious Accommodation",
                desc: "2 bedrooms and 2 bathrooms – ideal for families, friends or teammates",
              },
              {
                title: "Fully Equipped Kitchen",
                desc: "Dishwasher, fridge‑freezer and cookware for hearty post‑match meals",
              },
              {
                title: "Modern Conveniences",
                desc: "Washing machine, high‑speed Wi‑Fi and smart TV",
              },
              {
                title: "Outdoor Relaxation",
                desc: "Two sun‑drenched terraces for morning coffee or evening BBQs",
              },
              {
                title: "Grill Station",
                desc: "6‑burner gas grill for easy al‑fresco cooking",
              },
              {
                title: "Dedicated Workspace",
                desc: "Quiet desk area with striking resort views",
              },
              {
                title: "Panoramic Vistas",
                desc: "Look out across the golf courses to the Mar Menor and Mediterranean",
              },
              {
                title: "Central Position",
                desc: "Stroll to tennis courts, golf clubhouse and kids’ club",
              },
              {
                title: "Bright, Casual Interiors",
                desc: "Fresh coastal décor that feels like home",
              },
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
                La Manga Club at a Glance
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
                  Explore La Manga Club – Europe’s favourite multi‑sport resort.
                  Home to three championship golf courses, the 28‑court Racquets
                  Club for tennis, padel & pickleball, professional football and
                  cricket pitches, cycling routes and a newly upgraded wellness
                  spa.
                </p>
                <div className="space-y-4">
                  {[
                    "28 tennis, padel & pickleball courts at The Racquets Club",
                    "Three championship golf courses & pitch‑and‑putt",
                    "Professional football & cricket training pitches",
                    "Cycling routes and mountain‑bike hire",
                    "Sailing and water‑sports on the Mar Menor lagoon",
                    "Family‑friendly kids’ club and academies",
                    "Historic harbour city of Cartagena 25 minutes away",
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
              {
                title: "Championship Golf",
                desc: "Tee off on three award‑winning courses with sea and mountain backdrops",
              },
              {
                title: "Tennis & Padel",
                desc: "28 floodlit courts and top academies for every level",
              },
              {
                title: "Water Sports",
                desc: "Kayak, sail or dive in the calm Mar Menor lagoon and Mediterranean",
              },
              {
                title: "Wellness & Spa",
                desc: "Unwind with hydrotherapy, massage and yoga classes",
              },
              {
                title: "Cycling & Hiking",
                desc: "Ride coastal roads or hike the Calblanque nature park",
              },
              {
                title: "Local Flavours",
                desc: "Tapas bars, beach chiringuitos and family‑friendly restaurants",
              },
              {
                title: "Cultural Day Trips",
                desc: "Discover ancient Cartagena and the Cabo de Palos lighthouse",
              },
              {
                title: "Sports Academies",
                desc: "Seasonal golf, football, tennis and cricket camps for all ages",
              },
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
                desc: "Spacious accommodation with safe, family‑friendly environments and activities for all ages",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Golf Enthusiasts",
                desc: "Direct access to championship courses and practice facilities",
                icon: "⛳",
              },
              {
                title: "Wellness Travelers",
                desc: "Spa treatments, yoga sessions and peaceful Mediterranean atmosphere",
                icon: "🧘‍♀️",
              },
              {
                title: "Digital Nomads",
                desc: "Dedicated workspace with inspiring views and reliable connectivity",
                icon: "💻",
              },
              {
                title: "Northern Europeans",
                desc: "A welcoming community for British, German, Scandinavian and Swiss guests",
                icon: "🇪🇺",
              },
              {
                title: "Remote Workers",
                desc: "Quiet surroundings that balance productivity with outdoor recreation",
                icon: "🏡",
              },
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
                Take a look at Casa Barbara and the active lifestyle that awaits
                you
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
              Ready to plan your sport‑filled Mediterranean escape? Reach out to
              Barbara for availability, local tips and reservations.
            </p>
            <p className="text-lg text-foreground/70 mb-10">
              We can’t wait to welcome you to Casa Barbara at La Manga Club.
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
          <h3 className="font-playfair text-2xl font-semibold mb-4">
            Casa Barbara
          </h3>
          <p className="text-background/80 mb-4">
            Los Molinos, La Manga Club, Spain
          </p>
          <p className="text-background/60 text-sm">
            Sport, Sun & Spanish Hospitality
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
