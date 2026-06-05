import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Newspaper, Star, Share2, Megaphone, Mic } from "lucide-react";
import { submitLead } from "@/lib/integrations/crm";
import community from "@/assets/event-community.jpg";

export const Route = createFileRoute("/promote-your-event")({
  head: () => ({
    meta: [
      { title: "Promote Your Event — Firebird Entertainment Theatre" },
      { name: "description", content: "Every event hosted at Firebird gets meaningful exposure across our website, newsletter, and social channels — at no extra cost." },
      { property: "og:title", content: "Promote Your Event at Firebird" },
      { property: "og:description", content: "Book the room. Get the audience." },
    ],
  }),
  component: Promote,
});

const channels = [
  { icon: Newspaper, title: "Website Event Listings", body: "Featured on our high-traffic events calendar with photography, dates, and ticket links." },
  { icon: Star, title: "Homepage Features", body: "Selected events get hero placement on Firebird's homepage." },
  { icon: Share2, title: "Social Media Promotion", body: "Coordinated posts across Instagram, Facebook, and LinkedIn with our content team." },
  { icon: Megaphone, title: "Newsletter Exposure", body: "Inclusion in our subscriber newsletter to an opted-in Richmond audience." },
  { icon: Mic, title: "Event Spotlights", body: "Editorial interviews with organizers and behind-the-scenes coverage." },
];

function Promote() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submitLead("promote", Object.fromEntries(fd.entries()));
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Promote Your Event"
        title="Book the room. Get the audience."
        subtitle="When you host at Firebird, our marketing team works with yours. Every booking includes meaningful exposure across the channels organizers care about — at no extra cost."
        image={community}
      />

      <section className="container-page py-24 md:py-28">
        <ul className="grid gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map(({ icon: Icon, title, body }) => (
            <li key={title} className="bg-surface p-6">
              <Icon className="h-5 w-5 text-ember" />
              <h2 className="mt-4 font-display text-xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="container-page grid gap-12 py-24 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">Submit your event</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">Tell us about your event.</h2>
            <p className="mt-6 text-muted-foreground">
              A short brief is all we need to start. Our team will follow up with a tailored
              promotion plan within one business day.
            </p>
          </div>
          <div className="md:col-span-7">
            {sent ? (
              <div className="rounded-2xl bg-background ring-hairline p-10 text-center">
                <p className="font-display text-3xl text-foreground">Thanks — we've got it.</p>
                <p className="mt-3 text-muted-foreground">A member of our team will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl bg-background ring-hairline p-8">
                <Field label="Event name" name="eventName" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Organizer name" name="organizer" required />
                  <Field label="Event date" name="eventDate" type="date" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Tell us about the event</span>
                  <textarea name="details" rows={5} className="rounded-md border border-border bg-surface px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
                </label>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                  Submit event for promotion
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} className="rounded-md border border-border bg-surface px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
    </label>
  );
}