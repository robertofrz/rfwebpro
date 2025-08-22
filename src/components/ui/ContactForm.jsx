"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setStatus({
        loading: false,
        error: null,
        success: "Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: null });
    }
  };

  return (
    <div className="w-full max-w-lg">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h4 className="oswald uppercase font-semibold text-3xl mb-2">
          I’ll Get Back to You
        </h4>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-lightblue"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-lightblue"
          required
        />

        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-lightblue"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-lightblue"
          required
        />

        <label className="flex items-start text-sm gap-2 text-white/80 mb-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="w-4 h-4 mt-1"
          />
          <span>
            I agree to the{" "}
            <Link
              href="/terms-of-service"
              className="underline hover:text-lightblue"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:text-lightblue"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {status.error && <p className="text-red-500">{status.error}</p>}
        {status.success && <p className="text-green-500">{status.success}</p>}

        <button
          type="submit"
          disabled={status.loading || !formData.consent}
          className={`bg-lightblue oswald font-medium text-blue py-3 px-9 text-lg rounded-lg shadow-md uppercase hover:scale-101 active:scale-99 hover:shadow-lg cursor-pointer ${
            status.loading || !formData.consent
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
