import type { DanceClass } from "@/features/classes/types";
import type { EditorialPiece, Instructor, Organization } from "@/features/editorial/types";
import type { Event } from "@/features/events/types";

export type HomeContent = {
  organization: Organization;
  featuredEvent: Event | null;
  upcomingEvents: Event[];
  classes: DanceClass[];
  editorial: EditorialPiece[];
  instructors: Instructor[];
};

export interface ContentRepository {
  getHomeContent(): Promise<HomeContent>;
  getEvents(): Promise<Event[]>;
  getEventBySlug(slug: string): Promise<Event | null>;
  getClasses(): Promise<DanceClass[]>;
  getEditorial(): Promise<EditorialPiece[]>;
  getInstructors(): Promise<Instructor[]>;
}
