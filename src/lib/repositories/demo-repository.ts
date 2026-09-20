import {
  demoClasses,
  demoEditorial,
  demoEvents,
  demoInstructors,
  demoOrganization,
} from "@/data/demo/content";
import type { DanceClass } from "@/features/classes/types";
import type { EditorialPiece, Instructor } from "@/features/editorial/types";
import type { Event } from "@/features/events/types";
import type { ContentRepository, HomeContent } from "@/lib/repositories/types";

export const demoRepository: ContentRepository = {
  async getHomeContent(): Promise<HomeContent> {
    const published = demoEvents.filter((event) => event.status === "published");
    const featuredEvent =
      published.find((event) => event.featured) ?? published[0] ?? null;
    const upcomingEvents = published
      .filter((event) => event.id !== featuredEvent?.id)
      .slice(0, 4);

    return {
      organization: demoOrganization,
      featuredEvent,
      upcomingEvents,
      classes: demoClasses,
      editorial: demoEditorial,
      instructors: demoInstructors,
    };
  },

  async getEvents(): Promise<Event[]> {
    return demoEvents.filter((event) => event.status === "published");
  },

  async getEventBySlug(slug: string): Promise<Event | null> {
    return demoEvents.find((event) => event.slug === slug) ?? null;
  },

  async getClasses(): Promise<DanceClass[]> {
    return demoClasses;
  },

  async getEditorial(): Promise<EditorialPiece[]> {
    return demoEditorial;
  },

  async getInstructors(): Promise<Instructor[]> {
    return demoInstructors;
  },
};
