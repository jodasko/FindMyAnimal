import { useSearchContext } from "../contexts/SearchContext";

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLFormElement>);

const SearchInput = () => {
  const {
    setSearchTerm,
    searchTerm,
    handleSearch,
    setIsVisible,
    setError,
    setIsErrorVisible,
  } = useSearchContext();

  const onInputChange = ({ target }: InputEvent) => {
    setSearchTerm(target.value);
    setError(false);
    setIsErrorVisible(false);
  };

  const handleSubmit = (event: KeyboardEvent) => {
    event.preventDefault();
    if (searchTerm.trim().length < 1) {
      return;
    }
    handleSearch();
    setIsVisible(true);
  };

  const onClearSearch = () => {
    setSearchTerm("");
    setError(false);
    setIsErrorVisible(false);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search__box">
        <span className="search__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
        <input
          type="text"
          className="search__input"
          value={searchTerm}
          onChange={onInputChange}
        />
        {searchTerm && (
          <button
            type="button"
            aria-label="clear"
            className="search__button-clear"
            onClick={onClearSearch}
          >
            X
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
