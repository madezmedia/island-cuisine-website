export default function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-white to-[#F5EDDC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3A3A] mb-4 font-serif">
            Find Us in Charlotte
          </h2>
          <div className="w-24 h-1 bg-[#E87A5D] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[#1A3A3A]/80 max-w-3xl mx-auto font-light">
            Come experience the flavors of the Caribbean
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map/Location Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A3A3A] mb-6 flex items-center gap-3 font-serif">
                <span className="text-3xl">📍</span>
                Location & Hours
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-[#F5EDDC] w-10 h-10 flex items-center justify-center rounded-full">🏠</div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A3A] mb-1">Address</h4>
                    <p className="text-gray-600">2025 E Arbors Dr #210</p>
                    <p className="text-gray-600">Charlotte, NC 28262</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-[#F5EDDC] w-10 h-10 flex items-center justify-center rounded-full">🕐</div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A3A] mb-1">Hours</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>Tuesday - Thursday: 11:00 AM - 9:00 PM</li>
                      <li>Friday - Saturday: 11:00 AM - 10:00 PM</li>
                      <li>Sunday: 12:00 PM - 8:00 PM</li>
                      <li className="text-[#E87A5D] font-semibold">Monday: Closed</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-[#F5EDDC] w-10 h-10 flex items-center justify-center rounded-full">📞</div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A3A] mb-1">Phone</h4>
                    <a href="tel:+19802372677" className="text-[#E87A5D] hover:text-[#d6694c] font-semibold transition-colors">
                      (980) 237-2677
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl bg-[#F5EDDC] w-10 h-10 flex items-center justify-center rounded-full">✉️</div>
                  <div>
                    <h4 className="font-semibold text-[#1A3A3A] mb-1">Email</h4>
                    <a href="mailto:info@islandcuisineclt.com" className="text-[#E87A5D] hover:text-[#d6694c] transition-colors">
                      info@islandcuisineclt.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Island+Cuisine+Charlotte+NC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-full text-center bg-[#E87A5D] hover:bg-[#d6694c] text-white px-6 py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-md"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[400px] md:h-auto border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.8824361545686!2d-80.75931322359684!3d35.29645297314413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541dc8a2425f1b%3A0xe545938977114b7e!2s2025%20E%20Arbors%20Dr%20%23210%2C%20Charlotte%2C%20NC%2028262!5e0!3m2!1sen!2sus!4v1709567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Island Cuisine Location"
            ></iframe>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 bg-gradient-to-r from-[#E87A5D] to-[#FFD166] rounded-2xl p-8 md:p-12 text-[#1A3A3A] text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Serving the Greater Charlotte Area
          </h3>
          <p className="text-lg text-[#1A3A3A]/90 max-w-3xl mx-auto mb-6">
            We proudly serve customers throughout Charlotte, including Uptown, South End, NoDa,
            Dilworth, Myers Park, and surrounding areas within 15 miles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Uptown', 'South End', 'NoDa', 'Dilworth', 'Myers Park', 'Ballantyne', 'University City'].map((area) => (
              <span key={area} className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

