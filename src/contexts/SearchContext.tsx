import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchHandler } from "../hooks/useSearchHandler";
import { ResultData } from "../models/Animals.model";

type DispatchResultData = React.Dispatch<React.SetStateAction<ResultData | null>>;
type DispatchErrorState = React.Dispatch<React.SetStateAction<boolean>>;
type SearchState = {
  data: ResultData[];
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  selectedResult: ResultData | null;
  setSelectedResult: DispatchResultData;
  handleSearch: () => void;
  onInitPage: () => void;
  error: boolean;
  setError: DispatchErrorState;
  isErrorVisible: boolean;
  setIsErrorVisible: (shown: boolean) => void;
};

export const SearchContext = createContext<SearchState | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const {
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
  } = useSearchHandler();

  const onInitPage = () => {
    setData([]);
    setSearchTerm("");
    setIsLoading(false);
    navigate("/");
  };

  return (
    <SearchContext.Provider
      value={{
        isVisible,
        setIsVisible,
        searchTerm,
        setSearchTerm,
        handleSearch,
        isLoading,
        setIsLoading,
        data,
        onInitPage,
        selectedResult,
        setSelectedResult,
        error,
        setError,
        isErrorVisible,
        setIsErrorVisible,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Hook to access the HeaderContext
export const useSearchContext = (): SearchState => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
