import { useEffect } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import LoadingSkeleton from "../components/LoadingSkeleton";
import CardResult from "../components/CardResult";
import ListResults from "../components/ListResults";
import Message from "../components/Message";

const ResultsPage = () => {
  const {
    isLoading,
    data,
    searchTerm,
    selectedResult,
    error,
    setIsErrorVisible,
    isErrorVisible,
  } = useSearchContext();

  useEffect(() => {
    // Clear the message of No Results.. when there is a new search
    if (!searchTerm) {
      setIsErrorVisible(false);
    }
  }, [searchTerm, setIsErrorVisible]);

  return (
    <div className="results__content">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {selectedResult && data.length > 0 && <CardResult />}
          {data.length > 0 ? (
            <>
              {data.map((values) => (
                <ListResults key={values.id} {...values} />
              ))}
            </>
          ) : (
            <Message searchTerm={searchTerm} error={error && !isErrorVisible} />
          )}
        </>
      )}
    </div>
  );
};

export default ResultsPage;
