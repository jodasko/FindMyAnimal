import { useSearchContext } from "../contexts/SearchContext";
import { ResultData } from "../models/Animals.model";

type ListResultsProps = ResultData;

const ListResults: React.FC<ListResultsProps> = ({
  id,
  url,
  title,
  description,
  image,
  type,
}) => {
  const { setSelectedResult } = useSearchContext();
  return (
    <div key={id} role="list" className="result">
      <div className="result__link">{url}</div>
      <div
        className="result__title"
        onClick={() =>
          setSelectedResult({
            id,
            url,
            title,
            description,
            image,
            type,
          })
        }
      >
        {title}
      </div>
      <div className="result__description">{description}</div>
    </div>
  );
};

export default ListResults;
