import { useEffect } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import googleLogo from "../assets/google-logo.svg";

const HomePage = () => {
  const { setIsVisible, searchTerm } = useSearchContext();

  useEffect(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <>
      <div className="home">
        <main className="home__search">
          <img src={googleLogo} alt="Google Logo" />
          <SearchInput />
          <SearchButton isDisabled={!searchTerm.trim()} />
        </main>
      </div>
    </>
  );
};

export default HomePage;
