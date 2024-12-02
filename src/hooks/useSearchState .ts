import { useState } from "react";

export const useSearchState = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return { searchTerm, setSearchTerm, isVisible, setIsVisible };
};
