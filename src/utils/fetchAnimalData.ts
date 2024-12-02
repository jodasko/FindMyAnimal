import {
  getImage,
  getType,
  getUrl,
  getText,
  getTitle,
} from "./fakerAnimalModule";
import {
  AnimalType,
  ResultData,
  VALID_ANIMAL_TYPES,
} from "../models/Animals.model";
import { DataControl } from "../models/Global.enum";
import { generateRandomAnimals } from "./generateRandomAnimals";

/**
 * Fetch animal data based on the provided input searchTerm.
 * @param searchTerm - The term to search for.
 * @returns A promise resolving to a list of animal results or null.
 */
export const fetchAnimalData = (
  searchTerm: string
): Promise<ResultData[] | null> => {
  return new Promise((resolve) => {
    const isValidType = VALID_ANIMAL_TYPES.includes(
      searchTerm.toLowerCase() as AnimalType
    );
    let searchByTitleOrType: ResultData[] = [];

    //searches for valid animal by types or by title
    if (!isValidType) {
      const randomAnimals = generateRandomAnimals(DataControl.data);
      searchByTitleOrType = randomAnimals.filter(
        (animal) =>
          animal.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          animal.type?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Simulate delay in response
    setTimeout(() => {
      if (isValidType) {
        // Generate results for valid animal types
        const data: ResultData[] = Array.from(
          { length: DataControl.data },
          (_, index) => ({
            id: index + 1,
            image: getImage(),
            type: getType(),
            url: getUrl(),
            description: getText(),
            title: getTitle(searchTerm),
            animal: searchTerm,
          })
        );
        resolve(data);
      } else if (searchByTitleOrType.length > 0) {
        resolve(searchByTitleOrType);
      } else {
        resolve(null);
      }
    }, 1500);
  });
};
