import { faker } from "@faker-js/faker";
import { AnimalType, VALID_ANIMAL_TYPES } from "../models/Animals.model";

export const getImage = (): string =>
  faker.image.urlLoremFlickr({ category: "animals" });

export const getType = (): string => faker.animal.type();

export const getUrl = (): string => faker.internet.url();

export const getText = (): string => faker.lorem.sentences();

export const getTitle = (searchTerm: string): string =>
  faker.animal[searchTerm as AnimalType]();

export const randomType = faker.helpers.arrayElement(VALID_ANIMAL_TYPES); // Pick a random type

export const randomTitle = faker.animal[randomType](); // Get an animal title
