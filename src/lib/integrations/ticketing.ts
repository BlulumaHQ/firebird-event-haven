/**
 * Ticketing adapter interface.
 *
 * Future integrations (Eventbrite, Showpass, TicketTailor) implement this
 * shared interface so the UI doesn't need to know which provider is in use.
 */
export type TicketProviderId = "eventbrite" | "showpass" | "tickettailor" | "internal";

export type TicketLink = {
  provider: TicketProviderId;
  url: string;
  externalEventId?: string;
};

export interface TicketingAdapter {
  id: TicketProviderId;
  /** Build a deep link to the provider's purchase page for a given event. */
  buildCheckoutUrl(externalEventId: string): string;
  /** Optional: fetch live availability when backend is wired up. */
  fetchAvailability?(externalEventId: string): Promise<{ available: boolean; soldOut: boolean }>;
}

export const eventbriteAdapter: TicketingAdapter = {
  id: "eventbrite",
  buildCheckoutUrl: (id) => `https://www.eventbrite.com/e/${id}`,
};

export const showpassAdapter: TicketingAdapter = {
  id: "showpass",
  buildCheckoutUrl: (id) => `https://www.showpass.com/${id}/`,
};

export const ticketTailorAdapter: TicketingAdapter = {
  id: "tickettailor",
  buildCheckoutUrl: (id) => `https://www.tickettailor.com/events/${id}`,
};

export const adapters: Record<TicketProviderId, TicketingAdapter> = {
  eventbrite: eventbriteAdapter,
  showpass: showpassAdapter,
  tickettailor: ticketTailorAdapter,
  internal: {
    id: "internal",
    buildCheckoutUrl: (id) => `/tickets/${id}`,
  },
};