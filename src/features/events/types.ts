export type EventStatus = "draft" | "published" | "archived";

export type Event = {
  id: string;
  slug: string;
  title: string;
  status: EventStatus;
  startsAt: string;
  endsAt?: string;
  venueName: string;
  venueAddress?: string;
  city: string;
  shortDescription: string;
  description: string;
  priceLabel?: string;
  registrationLabel?: string;
  registrationUrl?: string;
  heroImage?: MediaSlot;
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MediaSlot = {
  id: string;
  alt: string;
  /** Placeholder tone until real photography is wired */
  tone: "ink" | "warm" | "concrete" | "stage" | "paper" | "ember";
  aspect?: "portrait" | "landscape" | "square" | "wide" | "tall";
};
