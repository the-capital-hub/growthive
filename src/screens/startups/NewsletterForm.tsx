"use client";
import * as React from "react";

function NewsletterForm() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <form className="flex gap-2.5" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2.5 text-white rounded-md border border-solid border-white border-opacity-20"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="px-5 py-2.5 font-semibold text-black bg-yellow-400 rounded-md transition-all cursor-pointer border-[none] duration-[0.3s]"
      >
        Submit
      </button>
    </form>
  );
}

export default NewsletterForm;
