import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { faqs } from "@/lib/data/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Firebird Entertainment Theatre" },
      { name: "description", content: "Answers to common questions about hosting your event at Firebird Entertainment Theatre in Richmond, BC." },
      { property: "og:title", content: "FAQ — Firebird Entertainment Theatre" },
      { property: "og:description", content: "Common questions about hosting your event at Firebird." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="The most common questions, answered." subtitle="Can't find what you're looking for? Reach out to our events team — we typically respond within one business day." />

      <section className="container-page pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-xl text-foreground md:text-2xl">{f.q}</span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-hairline transition-transform group-open:rotate-45">
                  <span className="text-2xl leading-none text-ember">+</span>
                </span>
              </summary>
              <p className="mt-4 text-pretty text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}