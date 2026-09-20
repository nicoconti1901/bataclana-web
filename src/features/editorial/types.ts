import type { MediaSlot } from "@/features/events/types";

export type EditorialPiece = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  byline: string;
  publishedAt: string;
  taxonomy: string[];
  heroImage?: MediaSlot;
};

export type Instructor = {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  portrait?: MediaSlot;
};

export type Organization = {
  name: string;
  tagline: string;
  city: string;
  neighborhood: string;
  statement: string;
  email: string;
  instagram: string;
  addressHint: string;
};
