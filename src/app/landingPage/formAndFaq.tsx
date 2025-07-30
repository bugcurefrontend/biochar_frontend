"use client";
import Image from "next/image";
import { useState } from "react";
import { FaQuinscape } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const interestOptions = [
  "Offset Emissions",
  "Explore Partnership",
  "Support Farmers",
  "Join as a Volunteer",
  "Other",
];

const faqs = [
  {
    question: "How does biochar help fight climate change?",
    answer:
      "Biochar is a stable form of carbon produced by heating biomass in low-oxygen conditions. When applied to soil, it improves health and locks carbon for thousands of years, preventing its return to the atmosphere.",
  },
  {
    question: "What are biochar carbon credits?",
    answer:
      "Each carbon credit represents the removal of one ton of CO₂. Heartyculture credits are certified and traceable through digital MRV.",
  },
  {
    question: "Who produces the biochar in your project?",
    answer:
      "We work with rural entrepreneurs and farmers who use sustainable methods to produce biochar from farm residue.",
  },
  {
    question: "How does biochar benefit farmers?",
    answer:
      "It improves fertility, water retention, crop yield, and income. We aim to provide biochar free to farmers via carbon credit purchases.",
  },
  {
    question: "Who produces the biochar in your project?",
    answer:
      "We work with rural entrepreneurs and farmers who use sustainable methods to produce biochar from farm residue.",
  },
  {
    question: "How does biochar benefit farmers?",
    answer:
      "It improves fertility, water retention, crop yield, and income. We aim to provide biochar free to farmers via carbon credit purchases.",
  },
];

export default function FormAndFaq() {
  const [selected, setSelected] = useState<string[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    interests?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  function validate() {
    const newErr: typeof errors = {};
    if (!form.name.trim()) newErr.name = "Required";
    if (!emailRegex.test(form.email)) newErr.email = "Invalid email";
    if (selected.length === 0) newErr.interests = "Pick at least one";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // 👉 replace with API call
    console.table({ ...form, interests: selected });
    setSubmitted(true);
  }

  return (
    <section className=" " id="formForId">
      <div className="max-w-7xl mt-8 mx-auto md:grid md:grid-cols-12">
        {/* ─────── Image (above on mobile, left on desktop) ─────── */}
        <div className="relative md:col-span-6 px-6">
          <Image
            src="/testimonile/video.jpg" // ↖ replace with real path
            alt="Green landscape"
            width={1600}
            height={900}
            className="w-full h-72 sm:h-96 md:h-full object-cover rounded-xl"
          />

          {/* Optional badge */}
          <span className="hidden lg:block absolute top-6 left-6 bg-black text-white text-xs px-3 py-1 rounded">
            Back in 2023
          </span>
        </div>

        {/* ─────── Form ─────── */}
        <div className="md:col-span-6 px-6 py-10 flex flex-col items-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2">
            Create impact today
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md border border-gray-300 bg-white rounded-xl p-3 space-y-6"
          >
            {/* Name */}
            <label className="block">
              <span className="text-xs font-medium">Full Name*</span>
              <div className="mt-1 relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                  <MdOutlineMailOutline />
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Karbon Karma"
                  className={`pl-10 pr-3 w-full rounded border py-2 placeholder:text-sm text-sm
          ${errors.name ? "border-red-500" : "border-gray-300"}
          focus:ring-gray-800 focus:border-gray-800`}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-600 mt-1">{errors.name}</p>
              )}
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-xs font-medium">Enter your email*</span>
              <div className="mt-1 relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                  <MdOutlineMailOutline />
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@carbon.co"
                  className={`pl-10 pr-3 w-full rounded border py-2 placeholder:text-sm text-sm
          ${errors.email ? "border-red-500" : "border-gray-300"}
          focus:ring-gray-800 focus:border-gray-800`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </label>

            {/* Interests */}
            <div>
              <span className="text-xs font-medium">Interests*</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {interestOptions.map((label) => {
                  const active = selected.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggle(label)}
                      className={`px-4 py-2 rounded text-xs border transition
              ${
                active
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {errors.interests && (
                <p className="text-xs text-red-600 mt-1">{errors.interests}</p>
              )}
            </div>

            {/* Message */}
            <label className="block">
              <span className="text-xs font-medium">Inquiry message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                className="mt-2 w-full rounded border py-2 border-gray-300 focus:ring-gray-800 focus:border-gray-800 text-sm resize-none"
              />
            </label>

            {/* Actions / Success */}
            {submitted ? (
              <p className="text-green-600 text-center text-sm">
                Thank you! We&apos;ll be in touch.
              </p>
            ) : (
              <div className="flex justify-center gap-2">
                <button
                  type="reset"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setSelected([]);
                    setErrors({});
                  }}
                  className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#123955] text-white text-sm hover:bg-gray-800"
                >
                  Transform carbon
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
          FAQs
        </h2>

        {/* Mobile Accordion View */}
        <div className="md:hidden bg-white rounded-xl border-2 border-gray-300 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 font-serif text-base text-gray-900"
              >
                {faq.question}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div
          id="FAQs"
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12 text-gray-800 px-7"
        >
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Image src={"/sticker.svg"} alt={"icon"} width={40} height={70} />
              <h4 className="font-serif text-lg">{faq.question}</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
