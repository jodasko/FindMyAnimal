import { useNavigate } from "react-router-dom";
import { fetchAnimalData } from "../utils/fetchAnimalData";
import { useErrorStates } from "./useErrorStates";
import { useLoadingState } from "./useLoadingState";
import { useResultsState } from "./useResultsState";
import { useSearchState } from "./useSearchState ";

export const useSearchHandler = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, isVisible, setIsVisible } =
    useSearchState();
  const { isLoading, setIsLoading } = useLoadingState();
  const { error, setError, isErrorVisible, setIsErrorVisible } =
    useErrorStates();
  const { data, setData, selectedResult, setSelectedResult } =
    useResultsState();

  const handleSearch = async () => {
    setData([]);
    setSelectedResult(null);
    navigate(`/results?q=${encodeURIComponent(searchTerm)}`);
    setIsLoading(true);

    try {
      const animalData = await fetchAnimalData(searchTerm);
      if (!animalData || animalData.length === 0) {
        setData([]);
        setError(true);
      } else {
        setData(animalData);
      }
    } catch {
      setError(true);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSearch,
    searchTerm,
    setSearchTerm,
    isVisible,
    setIsVisible,
    isLoading,
    setIsLoading,
    error,
    setError,
    isErrorVisible,
    setIsErrorVisible,
    data,
    setData,
    selectedResult,
    setSelectedResult,
  };
};
