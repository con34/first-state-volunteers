export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities Made Simple
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Connect volunteers with real events and organizations in your
              community.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="/events"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                View Events
              </a>

              <a
                href="/request"
                className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition"
              >
                Request Volunteers
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/hero.jpg"
              alt="Volunteers working together"
              className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              First State Volunteers connects students with meaningful service
              opportunities and helps local organizations request volunteers.
              Our goal is to make community service easy to coordinate, reliable,
              and impactful for everyone involved.
            </p>
          </div>
        </div>
      </section>


            {/* HOW IT WORKS */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3">
  1
</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Browse Events
              </h3>
              <p className="text-gray-700 leading-relaxed">
                View upcoming volunteer opportunities with dates, locations, and
                details so you can quickly find what fits your schedule.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3">
  2
</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                RSVP in Seconds
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sign up with a simple RSVP so leaders can plan and volunteers
                know where to be.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-3">
  3
</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Make an Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Show up, help out, and strengthen the community. Organizations
                can also request volunteers directly through this site.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MEET THE TEAM */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Person 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 mb-4">
                EM
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Eugene Ma
              </h3>
              <p className="text-gray-600 mb-3">Founder • CEO</p>
              <p className="text-gray-700 leading-relaxed">
                Coordinates events and meetings.
                
              </p>
            </div>

            {/* Person 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 mb-4">
                HK
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Haroon Khan
              </h3>
              <p className="text-gray-600 mb-3">Lead Web Developer</p>
              <p className="text-gray-700 leading-relaxed">
                Builds and maintains the site
              </p>
            </div>

            {/* Person 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700 mb-4">
                TP
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Tanay Patel
              </h3>
              <p className="text-gray-600 mb-3">Event Coordinator</p>
              <p className="text-gray-700 leading-relaxed">
                Plans volunteer meetups, confirms locations/times, and ensures
                volunteers have what they need on event day.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 font-medium">
            © {new Date().getFullYear()} First State Volunteers
          </p>

          <div className="flex gap-6 text-gray-600">
            <a href="/events" className="hover:text-gray-900 transition">
              Events
            </a>
            <a href="/request" className="hover:text-gray-900 transition">
              Request Volunteers
            </a>
            <a href="mailto:harkha42@gmail.com" className="hover:text-gray-900 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
