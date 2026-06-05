import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin } from "lucide-react";
import { submitLead } from "@/lib/integrations/crm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Firebird Entertainment Theatre" },
      { name: "description", content: "Get in touch with the Firebird Entertainment Theatre events team in Richmond, BC." },
      { property: "og:title", content: "Contact — Firebird Entertainment Theatre" },
      { property: "og:description", content: "Reach the events team at Richmond's premier event venue." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submitLead("contact", Object.fromEntries(fd.entries()));
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the events team."
        subtitle="Whether you're ready to book or still scoping options, we're happy to help. For specific date availability, the fastest route is the Request Availability form."
      />

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <ContactRow icon={MapPin} label="Visit" value="12500 Vickers Way #200, Richmond, BC V6V 1H9" />
            <ContactRow icon={Mail} label="Email" value="events@firebirdtheatre.ca" />
            <ContactRow icon={Phone} label="Phone" value="(604) 719-7906" />
            <ContactRow icon={Clock} label="Hours" value="Mon–Fri 10 a.m. – 5 p.m." />
            <div className="rounded-2xl bg-surface/60 ring-hairline p-6">
              <p className="text-sm text-muted-foreground">For specific date enquiries, use:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/request-availability" className="inline-flex items-center rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-ember">Request Availability</Link>
                <Link to="/book-a-tour" className="inline-flex items-center rounded-full ring-hairline px-5 py-2.5 text-sm text-foreground hover:bg-surface">Book a Tour</Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="rounded-2xl bg-surface ring-hairline p-10 text-center">
                <p className="font-display text-3xl">Message received.</p>
                <p className="mt-3 text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl bg-surface ring-hairline p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">How can we help?</span>
                  <textarea name="message" rows={6} required className="rounded-md border border-border bg-background px-3 py-2.5 text-foreground focus:border-ember focus:outline-none" />
                </label>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-ember">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-hairline bg-surface">
        <Icon className="h-4 w-4 text-ember" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-foreground">{value}</p>
      </div>
    </div>
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