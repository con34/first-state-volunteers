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
            <img
              src="/logo.png" // put your logo file in /public
              alt="First State Volunteers Logo"
              className="h-25 w-25 object-contain"
            />
            <span className="text-white font-bold text-3xl">
              First State Volunteers
            </span>
          </div>
          </Link>
          

          {/* Navigation links */}
          <div className="flex gap-4">
            <Link href="/events" className="hover:underline">Events</Link>
            <Link href="/request" className="hover:underline">Request</Link>
            <Link href="/admin" className="hover:underline">Admin</Link>
          </div>
        </nav>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
