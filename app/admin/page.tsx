"use client";

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Event = { id: string; title: string; date: string };
type RSVP = { id: string; user_name: string; event_id: string };
type Request = {
  id: string;
  organization_name: string;
  contact_email: string;
  description: string;
  event_date: string;
  location: string;
};

export default function AdminPage() {
  const router = useRouter();

  // --- ALL HOOKS DECLARED FIRST ---
  const [authorized, setAuthorized] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [events, setEvents] = useState<Event[]>([]);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Authorization check ---
  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin === "true") {
      setAuthorized(true);
    } else {
      router.push("/login");
    }
    setLoadingAuth(false);
  }, [router]);

  // --- Fetch admin data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: eventsData } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        const { data: rsvpsData } = await supabase.from("rsvps").select("*");
        const { data: requestsData } = await supabase
          .from("requests")
          .select("*")
          .order("event_date", { ascending: true });

        if (eventsData) setEvents(eventsData);
        if (rsvpsData) setRsvps(rsvpsData);
        if (requestsData) setRequests(requestsData);
      } catch (err) {
        console.log("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Conditional rendering based on state ---
  if (loadingAuth) return <p>Checking authorization...</p>;
  if (!authorized) return <p>Not authorized</p>;
  if (loading) return <p>Loading admin dashboard...</p>;

  // --- JSX ---
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <button
  onClick={() => {
    sessionStorage.removeItem("isAdmin"); // clear admin session
    router.push("/"); // redirect home (or to /login)
  }}
  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-4"
>
  Logout
</button>

      {/* Events */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Events</h2>
        {events.length === 0 ? (
          <p>No events</p>
        ) : (
          <ul className="list-disc pl-5">
            {events.map((e) => (
              <li key={e.id}>
                {e.title} — {new Date(e.date).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* RSVPs */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">RSVPs</h2>
        {rsvps.length === 0 ? (
          <p>No RSVPs yet</p>
        ) : (
          <ul className="list-disc pl-5">
            {rsvps.map((r) => {
              const event = events.find((e) => e.id === r.event_id);
              return (
                <li key={r.id}>
                  {r.user_name} — {event ? event.title : "Unknown Event"}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Volunteer Requests */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Volunteer Requests</h2>
        {requests.length === 0 ? (
          <p>No requests yet</p>
        ) : (
          <ul className="list-disc pl-5">
            {requests.map((req) => (
              <li key={req.id}>
                {req.organization_name} — {req.description} —{" "}
                {new Date(req.event_date).toLocaleString()} at {req.location} —{" "}
                {req.contact_email}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
