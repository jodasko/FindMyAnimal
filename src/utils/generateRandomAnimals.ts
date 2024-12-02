import { faker } from "@faker-js/faker";
import { ResultData, VALID_ANIMAL_TYPES } from "../models/Animals.model";

export const generateRandomAnimals = (count: number): ResultData[] => {
  return Array.from({ length: count }, () => {
    const type = faker.helpers.arrayElement(VALID_ANIMAL_TYPES); // Pick a random type
    const title = faker.animal[type](); // Get an animal title
    const image = faker.image.urlLoremFlickr({ category: "animals" });
    const description = faker.lorem.sentences();
    const url = faker.internet.url();
    return {
      id: Number(faker.number.binary(255)),
      type,
      title,
      description,
      image,
      url,
    };
  });
};
