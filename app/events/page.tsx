"use client";

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
  const [rsvpName, setRsvpName] = useState(""); // for the input
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null); // track which event we’re RSVPing for

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) setErrorMsg(error.message);
        else if (data) setEvents(data);
      } catch (err) {
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

  if (loading) return <p>Loading events...</p>;
  if (errorMsg) return <p className="text-red-600">Error: {errorMsg}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{event.description}</p>
              <p className="text-gray-600">
                {new Date(event.date).toLocaleString()} at {event.location}
              </p>

              {selectedEvent === event.id ? (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border p-1 mr-2 rounded"
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
                    className="ml-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setSelectedEvent(event.id)}
                >
                  RSVP
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
