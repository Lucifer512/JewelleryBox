import { Award, Heart, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Crafting Timeless Elegance
          </h1>
          <p className="text-xl text-elegant-100">
            Since 1990, we&apos;ve been creating exceptional jewelry that tells your story
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-elegant-600 text-lg leading-relaxed">
            <p>
              LuxeJewels was founded with a singular vision: to create jewelry that transcends time
              and celebrates the most precious moments in life. For over three decades, we&apos;ve been
              dedicated to the art of fine jewelry craftsmanship.
            </p>
            <p>
              Every piece in our collection is meticulously handcrafted by master artisans who bring
              decades of experience and an unwavering commitment to excellence. We source only the
              finest materials – ethically mined diamonds, precious metals, and rare gemstones – to
              ensure that each creation meets our exacting standards.
            </p>
            <p>
              Our commitment extends beyond creating beautiful jewelry. We believe in responsible
              sourcing, environmental stewardship, and giving back to the communities that make our
              work possible. When you choose LuxeJewels, you&apos;re not just purchasing jewelry –
              you&apos;re investing in a legacy of craftsmanship and ethical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-elegant-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-elegant-600">
                Uncompromising quality in every piece we create
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Passion</h3>
              <p className="text-elegant-600">
                Dedicated to the art and craft of fine jewelry
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Integrity</h3>
              <p className="text-elegant-600">
                Ethical sourcing and transparent practices
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Heritage</h3>
              <p className="text-elegant-600">
                Over 30 years of master craftsmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Master Craftsmanship</h2>
              <p className="text-elegant-600 text-lg mb-6">
                Each piece of jewelry is a testament to the skill and dedication of our master artisans.
                With techniques passed down through generations and modern innovation, we create pieces
                that are both timeless and contemporary.
              </p>
              <p className="text-elegant-600 text-lg">
                From the initial design sketch to the final polish, every step is performed with
                meticulous attention to detail. Our craftsmen spend years perfecting their skills,
                ensuring that every LuxeJewels piece is a work of art.
              </p>
            </div>
            <div
              className="aspect-4/3 rounded-2xl bg-elegant-100 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80)',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
