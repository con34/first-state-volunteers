export default function ReferencePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border">

        <h1 className="text-3xl font-bold mb-6">Reference Page</h1>

        {/* Sources */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Sources</h2>
          <p className="text-gray-700 mb-2">
            All written content on this website was created by the team members.
          </p>
          <p className="text-gray-700 mb-2">
            No external articles, publications, or copyrighted written material
            were used.
          </p>
          <p className="text-gray-700">
            Image on main page sourced from pexels.com (royalty free)
          </p>
        </section>

        {/* Copyright */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Copyright Statement</h2>
          <p className="text-gray-700">
            All content on this website was created by the team unless otherwise
            noted. Permission has been obtained for any copyrighted material
            used.
          </p>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Required Documents</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <a
                href="/copyright-checklist.pdf"
                className="text-blue-600 hover:underline"
              >
                Student Copyright Checklist (PDF)
              </a>
            </li>
            <li>
              <a
                href="/work-log.pdf"
                className="text-blue-600 hover:underline"
              >
                Work Log (PDF)
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
