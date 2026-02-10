import Link from "next/link";
import "./globals.css"; // ensures Tailwind works

export const metadata = {
  title: "First State Volunteers",
  description: "Hub for volunteer coordination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {/* Navbar */}
        <nav className="bg-blue-800 text-white p-1   flex justify-between items-center">
          {/* Logo + Org Name */}
          <Link href="/">
          <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
  <img src="/logo.png" alt="First State Volunteers Logo" className="h-20 w-20 object-contain" />
  <span className="text-white font-bold text-3xl">First State Volunteers</span>
</Link>

          </div>
          </Link>
          

          {/* Navigation links */}
          <div className="flex gap-6 text-lg font-medium">
  <Link href="/events" className="hover:text-blue-200 transition">
    Events
  </Link>
  <Link href="/request" className="hover:text-blue-200 transition">
    Request
  </Link>
  <Link href="/admin" className="hover:text-blue-200 transition">
    Admin
  </Link>
    <Link href="/reference" className="hover:text-blue-200 transition">
    Reference
  </Link>
</div>

        </nav>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
