export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Volunteer Opportunities Made Simple
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Connect volunteers with real events and organizations in your
          community.
        </p>

        <div className="flex justify-center gap-4">
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
    </main>
  );
}
