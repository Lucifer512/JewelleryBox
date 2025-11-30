import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-elegant-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-elegant-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-elegant-600 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? We&apos;re here to help you find the perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-semibold text-2xl mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-elegant-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-elegant-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-elegant-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-elegant-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-elegant-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-elegant-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-full font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-semibold text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Our Showroom</h3>
                    <p className="text-elegant-600">
                      123 Luxury Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-100 rounded-lg">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-elegant-600">
                      +1 (555) 123-4567<br />
                      Toll-Free: +1 (800) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-100 rounded-lg">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-elegant-600">
                      info@luxejewels.com<br />
                      support@luxejewels.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-100 rounded-lg">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-elegant-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-50 rounded-2xl p-8 border border-gold-200">
              <h3 className="font-semibold text-lg mb-2">Private Consultation</h3>
              <p className="text-elegant-700 mb-4">
                Schedule a private appointment with our jewelry experts for personalized service
                and exclusive collections.
              </p>
              <button className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-full font-semibold transition-all">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
