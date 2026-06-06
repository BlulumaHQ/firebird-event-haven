import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { submitLead } from "@/lib/integrations/crm";
import { eventTypes } from "@/lib/data/event-types";
import { Check } from "lucide-react";

export const Route = createFileRoute("/request-availability")({
  head: () => ({
    meta: [
      { title: "Request Availability — Firebird Entertainment Theatre" },
      { name: "description", content: "Check date availability for your event at Firebird Entertainment Theatre in Richmond, BC. We respond within one business day." },
      { property: "og:title", content: "Request Availability — Firebird" },
      { property: "og:description", content: "Check date availability for your event at Firebird Entertainment Theatre." },
    ],
  }),
  component: RequestAvailability,
});

function RequestAvailability() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submitLead("availability", Object.fromEntries(fd.entries()));
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Request Availability"
        title="Check your date."
        subtitle="Tell us about your event. Our team will respond within one business day with confirmed availability, pricing guidance, and recommended configurations."
      />

      <section className="section-cream">
      <div className="container-page pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4">
            <div className="rounded-2xl bg-surface/60 ring-hairline p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What happens next</p>
              <ol className="mt-5 space-y-4 text-sm text-foreground/90">
                {["You send us the basics", "We check availability for your date", "You get a tailored proposal", "We book a tour & lock the date"].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ember/15 text-xs text-ember">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-border/60 pt-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-ember" /> Reply within one business day</p>
                <p className="mt-2 flex items-center gap-2"><Check className="h-4 w-4 text-ember" /> No-obligation quote</p>
                <p className="mt-2 flex items-center gap-2"><Check className="h-4 w-4 text-ember" /> Pricing guidance included</p>
              </div>
            </div>
          </aside>

          <div className="md:col-span-8">
            {sent ? (
              <div className="rounded-2xl bg-surface ring-hairline p-12 text-center">
                <p className="font-display text-4xl">We've received your request.</p>
                <p className="mt-4 text-muted-foreground">A member of our events team will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl bg-surface ring-hairline p-8 md:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Event name" name="eventName" required />
                  <Select label="Event type" name="eventType" required options={eventTypes.map((t) => ({ value: t.slug, label: t.name }))} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Preferred date" name="preferredDate" type="date" required />
                  <Field label="Alternate date" name="alternateDate" type="date" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Expected attendance" name="attendance" type="number" required />
                  <Select label="Setup" name="setup" required options={[
                    { value: "theatre", label: "Theatre style" },
                    { value: "banquet", label: "Banquet rounds" },
                    { value: "classroom", label: "Classroom" },
                    { value: "reception", label: "Reception / standing" },
                    { value: "cabaret", label: "Cabaret" },
                  ]} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Organization" name="organization" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Tell us about your event</span>
                  <textarea name="details" rows={5} className="rounded-md border border-border bg-background px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
                </label>

                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                  Submit availability request
                </button>
              </form>
            )}
          </div>
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

function Select({ label, name, options, required }: { label: string; name: string; required?: boolean; options: { value: string; label: string }[] }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted-foreground">{label}{required && " *"}</span>
      <select name={name} required={required} defaultValue="" className="rounded-md border border-border bg-background px-3 py-2.5 text-foreground focus:border-ember focus:outline-none">
        <option value="" disabled>Choose one…</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}