import { useSearchContext } from "../contexts/SearchContext";
import SearchInput from "../components/SearchInput";
import googleLogo from "../assets/google-logo.svg";
import menuGrid from "../assets/menu-grid.svg";
import profileImage from "../assets/user-turpial.png";

const Header = () => {
  const { isVisible, onInitPage } = useSearchContext();

  return (
    <header className="header">
      {!isVisible ? (
        <div className="header__brand">
          <span className="header__brand-title">Agile Content</span>
          <span className="header__brand-subtitle">Frontend test</span>
        </div>
      ) : (
        <div className="header__search">
          <img
            onClick={onInitPage}
            src={googleLogo}
            alt="Google Logo"
            className="header__brand-logo "
          />
          <SearchInput />
        </div>
      )}
      <div className="header__actions">
        <div className="header__actions-menu">
          <img src={menuGrid} />
        </div>
        <img
          className="header__actions-profile"
          src={profileImage}
          alt="User profile"
        />
      </div>
    </header>
  );
};

export default Header;
