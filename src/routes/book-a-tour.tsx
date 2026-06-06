import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { submitLead } from "@/lib/integrations/crm";
import lobby from "@/assets/venue-lobby.jpg";

export const Route = createFileRoute("/book-a-tour")({
  head: () => ({
    meta: [
      { title: "Book a Venue Tour — Firebird Entertainment Theatre" },
      { name: "description", content: "Schedule a private walk-through of Firebird Entertainment Theatre in Richmond, BC. See the lobby, hall, stage, and backstage areas." },
      { property: "og:title", content: "Book a Venue Tour — Firebird" },
      { property: "og:description", content: "Schedule a private walk-through of Firebird." },
    ],
  }),
  component: BookATour,
});

function BookATour() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submitLead("tour", Object.fromEntries(fd.entries()));
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Book a Tour"
        title="See the room for yourself."
        subtitle="Photos only get you so far. Book a private walk-through and a member of our team will show you the lobby, hall, stage, and backstage areas at a time that works for you."
        image={lobby}
      />

      <section className="section-cream">
      <div className="container-page pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-3xl">
          {sent ? (
            <div className="rounded-2xl bg-surface ring-hairline p-12 text-center">
              <p className="font-display text-4xl">Tour request received.</p>
              <p className="mt-4 text-muted-foreground">We'll confirm your preferred time within one business day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl bg-surface ring-hairline p-8 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Organization" name="organization" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred date" name="preferredDate" type="date" required />
                <Field label="Preferred time" name="preferredTime" type="time" required />
              </div>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Tell us about your event (optional)</span>
                <textarea name="details" rows={5} className="rounded-md border border-border bg-background px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
              </label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                Request tour
              </button>
            </form>
          )}
        </div>
      </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} className="rounded-md border border-border bg-background px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
    </label>
  );
}