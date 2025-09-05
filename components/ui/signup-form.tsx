"use client";
import React from "react";

export default function SignupForm() {
  return (
    <form
      action="https://formspree.io/f/mdklpdng" // Replace with your Formspree form ID after first submission
      method="POST"
      className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-neutral-900"
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Jetzt Probefahrt buchen</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="vorname">Vorname</label>
        <input className="w-full rounded-md border px-3 py-2" id="vorname" name="Vorname" type="text" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="nachname">Nachname</label>
        <input className="w-full rounded-md border px-3 py-2" id="nachname" name="Nachname" type="text" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="email">E-Mail</label>
        <input className="w-full rounded-md border px-3 py-2" id="email" name="Email" type="email" required />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium" htmlFor="phone">Telefon</label>
        <input className="w-full rounded-md border px-3 py-2" id="phone" name="Telefon" type="tel" />
      </div>
      <button type="submit" className="w-full rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition">Absenden</button>
    </form>
  );
}
