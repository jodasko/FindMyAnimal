import { useSearchContext } from "../contexts/SearchContext";
import { ButtonSearchStates } from "../models/Global.enum";

type SearchButtonProps = {
  isDisabled: boolean;
};

const SearchButton: React.FC<SearchButtonProps> = ({ isDisabled }) => {
  const { setIsVisible, handleSearch } = useSearchContext();

  const onSearch = () => {
    handleSearch();
    setIsVisible(true);
  };

  return (
    <button
      className="search__button"
      aria-label="search"
      onClick={onSearch}
      disabled={isDisabled}
      style={{
        backgroundColor: isDisabled
          ? ButtonSearchStates.BG_DISABLE
          : ButtonSearchStates.BG_ENABLE,
        color: isDisabled
          ? ButtonSearchStates.TEXT_DISABLE
          : ButtonSearchStates.TEXT_ENABLE,
        cursor: isDisabled
          ? ButtonSearchStates.CURSOR_DISABLE
          : ButtonSearchStates.CURSOR_ENABLE,
      }}
    >
      Buscar
    </button>
  );
};

export default SearchButton;
