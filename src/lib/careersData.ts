import openPositionsData from "@/data/careers.json";

export interface Position {
  id: string;
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const openPositions: Position[] = openPositionsData as Position[];

export function getJobBySlug(slug: string): Position | undefined {
  return openPositions.find((pos) => pos.slug === slug);
}

export function getJobById(id: string): Position | undefined {
  return openPositions.find((pos) => pos.id === id);
}
