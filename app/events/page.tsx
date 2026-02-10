"use client";
import Link from "next/link";

import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [rsvpName, setRsvpName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) setErrorMsg(error.message);
        else if (data) setEvents(data);
      } catch {
        setErrorMsg("Unexpected error fetching events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRsvp = async () => {
    if (!rsvpName || !selectedEvent) return;

    const { error } = await supabase.from("rsvps").insert([
      {
        user_name: rsvpName,
        event_id: selectedEvent,
      },
    ]);

    if (error) alert("Error submitting RSVP: " + error.message);
    else {
      alert("RSVP submitted!");
      setRsvpName("");
      setSelectedEvent(null);
    }
  };

  return (
    <main className="bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-gray-600">
            Browse upcoming events and RSVP to let us know you’re coming.
          </p>
        </header>

        {/* Quick Info Panel */}
        <section className="grid gap-4 sm:grid-cols-3 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">What to bring</h3>
            <p className="text-sm text-gray-600">
              A positive attitude and anything noted in the event description.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Who can attend</h3>
            <p className="text-sm text-gray-600">
              All community members and volunteers are welcome.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Questions?</h3>
            <p className="text-sm text-gray-600">
              Reach out to our team if you need more details.
            </p>
          </div>
        </section>

        {/* Loading / Error States */}
        {loading && <p>Loading events...</p>}
        {errorMsg && <p className="text-red-600">Error: {errorMsg}</p>}

        {/* Events List / Empty State */}
        {!loading && !errorMsg && (
          <>
            {events.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <h2 className="text-xl font-semibold mb-2">
                  No events posted yet
                </h2>
                <p className="text-gray-600 mb-4">
                  Check back soon for upcoming opportunities to get involved.
                </p>
                <Link
  href="/request"
  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Check back soon
</Link>

              </div>
            ) : (
              <div className="grid gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h2 className="text-xl font-semibold mb-1">
                      {event.title}
                    </h2>
                    <p className="mb-3">{event.description}</p>
                    <p className="text-gray-600 mb-4">
                      {new Date(event.date).toLocaleString()} ·{" "}
                      {event.location}
                    </p>

                    {selectedEvent === event.id ? (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="border p-2 rounded flex-1"
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                        />
                        <button
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                          onClick={handleRsvp}
                        >
                          Submit RSVP
                        </button>
                        <button
                          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                          onClick={() => setSelectedEvent(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => setSelectedEvent(event.id)}
                      >
                        RSVP
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
