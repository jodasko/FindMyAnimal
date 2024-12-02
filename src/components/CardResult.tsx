import { useSearchContext } from "../contexts/SearchContext";
import ModalOverlay from "./ModalOverlay";

const CardResult = () => {
  const { selectedResult } = useSearchContext();

  if (!selectedResult) return null;

  return (
    <>
      <ModalOverlay />
      <div className="card">
        <img
          src={selectedResult.image}
          alt={selectedResult.title || ""}
          className="card--content__image"
        />
        <div className="card--content">
          <a href={selectedResult.url} className="card--content__link">
            {selectedResult.url}
          </a>
          <h3 className="card--content__title">{selectedResult.title}</h3>
          <p className="card--content__description">
            {selectedResult.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardResult;
