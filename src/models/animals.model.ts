export type AnimalType =
  | "bear"
  | "bird"
  | "cat"
  | "cetacean"
  | "cow"
  | "crocodilia"
  | "dog"
  | "fish"
  | "horse"
  | "insect"
  | "lion"
  | "rabbit"
  | "rodent"
  | "snake";

export const VALID_ANIMAL_TYPES: AnimalType[] = [
  "bear",
  "bird",
  "cat",
  "cetacean",
  "cow",
  "crocodilia",
  "dog",
  "fish",
  "horse",
  "insect",
  "lion",
  "rabbit",
  "rodent",
  "snake",
];

export interface ResultData {
  id: number;
  image: string;
  type: string;
  url: string;
  description: string;
  title: string | null;
}
