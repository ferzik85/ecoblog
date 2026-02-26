"use client";
import { useState } from "react";
import styles from "./contact.module.css";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function ContactMe() {
  const [status, setStatus] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("subject", "New message sent from EcoBlog");
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
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Form</h1>
        <h1 className={styles.title}>{WEB3FORMS_ACCESS_KEY}</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          name="name"
          type="text"
          placeholder="Name (required)"
          required
          className={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email (required)"
          required
          className={styles.input}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject (required)"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Message (required)"
          required
          className={styles.textarea}
        />
        <input
          type="checkbox"
          name="botcheck"
          className={styles.hidden}
          tabIndex={-1}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={!WEB3FORMS_ACCESS_KEY}
          className={styles.submit}
        >
          SEND
        </button>
        <p className={styles.status}>{status}</p>
      </form>
      </div>
    </div>
  );
}
