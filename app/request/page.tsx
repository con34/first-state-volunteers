"use client";

import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import Link from "next/link";

export default function RequestPage() {
  const [organizationName, setOrganizationName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [volunteersNeeded, setVolunteersNeeded] = useState("");
  const [roleType, setRoleType] = useState("");
  const [description, setDescription] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setErrorMsg("");

    if (
      !organizationName ||
      !contactName ||
      !email ||
      !volunteersNeeded ||
      !roleType ||
      !description ||
      !date ||
      !location
    ) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("requests").insert([
      {
        organization_name: organizationName,
        contact_name: contactName,
        contact_email: email,
        volunteers_needed: Number(volunteersNeeded),
        role_type: roleType,
        description,
        special_requirements: specialRequirements,
        event_date: date,
        location,
      },
    ]);

    if (error) {
      setErrorMsg("Error submitting request: " + error.message);
      setSubmitting(false);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main className="bg-gray-50 px-6 py-12">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-center">
          <h1 className="text-2xl font-bold mb-3">Request Submitted ✅</h1>
          <p className="text-gray-600 mb-4">
            Thanks for reaching out! Our team will review your request and
            follow up within 48 hours.
          </p>
          <p className="text-gray-600 mb-6">
            <a className="font-medium text-blue-600 hover:underline" href="mailto:YOUR_EMAIL">
  YOUR_EMAIL
</a>
            If your request is urgent, please contact us directly at{" "}
            <span className="font-medium">@harkha42@gmail.com</span>.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Events
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Request Volunteers</h1>
          <p className="text-gray-600">
            This form is for nonprofits, schools, and community organizations
            seeking volunteer support. After submission, our team will review
            your request and follow up with next steps.
          </p>
        </header>

        {/* Guidelines */}
        <section className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Minimum notice</h3>
            <p className="text-sm text-gray-600">
              Please submit requests at least 7 days in advance.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Supervision & safety</h3>
            <p className="text-sm text-gray-600">
              An adult supervisor must be present at all times.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Response time</h3>
            <p className="text-sm text-gray-600">
              We typically respond within 48 hours.
            </p>
          </div>
        </section>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {errorMsg && (
            <p className="text-red-600 mb-4">{errorMsg}</p>
          )}

          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Organization Name"
              className="border p-2 rounded"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Contact Name"
              className="border p-2 rounded"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Contact Email"
              className="border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              placeholder="Number of volunteers needed"
              className="border p-2 rounded"
              value={volunteersNeeded}
              onChange={(e) => setVolunteersNeeded(e.target.value)}
            />

            <select
              className="border p-2 rounded"
              value={roleType}
              onChange={(e) => setRoleType(e.target.value)}
            >
              <option value="">Type of volunteer work</option>
              <option value="cleanup">Cleanup</option>
              <option value="tutoring">Tutoring</option>
              <option value="food_pantry">Food pantry</option>
              <option value="event_staffing">Event staffing</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Event description"
              className="border p-2 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <textarea
              placeholder="Special requirements (optional)"
              className="border p-2 rounded"
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
            />

            <input
              type="datetime-local"
              className="border p-2 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="text"
              placeholder="Event location"
              className="border p-2 rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
