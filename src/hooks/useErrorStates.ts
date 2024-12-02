import { useState } from "react";

export const useErrorStates = () => {
  const [error, setError] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  return { error, setError, isErrorVisible, setIsErrorVisible };
};
