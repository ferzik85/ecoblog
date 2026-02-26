"use client";
import { useState } from "react";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function ContactMe() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("subject", "New message from EcoBlog");
    fd.append("from_name", String(fd.get("name") || "Website Visitor"));
   
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fd,
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok && data?.success) {
      setStatus("Sent ✅");
      form.reset();
      return;
    }

    setStatus(`Error: ${data?.message || "unknown"}`);
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <button type="submit" disabled={!WEB3FORMS_ACCESS_KEY}>
        Send
      </button>
      <p>{status}</p>
    </form>
  );
}