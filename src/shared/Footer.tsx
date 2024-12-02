import { useSearchContext } from "../contexts/SearchContext";

const Footer = () => {
  const { isVisible } = useSearchContext();

  return (
    <>
      {!isVisible && (
        <footer className="footer">
          <div className="footer__content">
            <span className="footer__copyright">© Google 2021</span>
            <span className="footer__version">version: 0.1.0</span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
