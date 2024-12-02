import { VALID_ANIMAL_TYPES } from "../models/Animals.model";

type MessageProps = {
  searchTerm: string;
  error: boolean;
};

const Message: React.FC<MessageProps> = ({ searchTerm, error }) => {
  return (
    <div className="results__content--no-data">
      {error && (
        <p>
          No results found for <b>'{searchTerm}'</b>.
        </p>
      )}
      <p>
        Try looking for: <strong>{VALID_ANIMAL_TYPES.join(", ")}.</strong>
      </p>
    </div>
  );
};

export default Message;
