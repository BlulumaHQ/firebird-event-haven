/**
 * CRM submission stub.
 *
 * Forms (Request Availability, Book A Tour, Promote Your Event) call into a
 * single function so we can swap the implementation for a `createServerFn` +
 * Lovable Cloud insert (or a CRM webhook) without touching the UI.
 */
export type LeadKind = "availability" | "tour" | "promote" | "contact";

export type LeadPayload = {
  kind: LeadKind;
  data: Record<string, unknown>;
  submittedAt: string;
};

export async function submitLead(kind: LeadKind, data: Record<string, unknown>) {
  const payload: LeadPayload = { kind, data, submittedAt: new Date().toISOString() };
  // eslint-disable-next-line no-console
  console.info("[firebird/crm] lead submitted (stub)", payload);
  // Simulate network latency for nicer UX feedback.
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true as const };
}