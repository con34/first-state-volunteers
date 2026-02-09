"use client";

import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";

export default function RequestPage() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!organizationName || !email || !description || !date || !location) {
      alert("Please fill in all fields");
      return;
    }

    const { error } = await supabase.from("requests").insert([
      {
        organization_name: organizationName,
        contact_email: email,
        description,
        event_date: date,
        location,
      },
    ]);

    if (error) {
      alert("Error submitting request: " + error.message);
    } else {
      setSubmitted(true);
      setOrganizationName("");
      setEmail("");
      setDescription("");
      setDate("");
      setLocation("");
    }
  };

  if (submitted)
    return (
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Request Submitted!</h1>
        <p>Thank you! The First State Volunteers team will review your request.</p>
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Request Volunteers</h1>

      <input
        type="text"
        placeholder="Organization Name"
        className="border p-2 w-full mb-2"
        value={organizationName}
        onChange={(e) => setOrganizationName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Contact Email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Event Description"
        className="border p-2 w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="datetime-local"
        className="border p-2 w-full mb-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="text"
        placeholder="Event Location"
        className="border p-2 w-full mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Request
      </button>
    </div>
  );
}
