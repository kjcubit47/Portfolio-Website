"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xgvwqpdk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Something went wrong. Please try again.");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <section className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-4">
          I&apos;d love to hear from you! Whether you have a question, a project
          idea, or just want to say hello, feel free to get in touch using the
          form below.
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <label htmlFor="message" className="text-lg mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded h-32"
            required
          />

          <button
            type="submit"
            className="p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-green-600">{status}</p>}
      </section>
    </main>
  );
}
