import { useSearchContext } from "../contexts/SearchContext";

function ModalOverlay() {
  const { setSelectedResult } = useSearchContext();

  return (
    <div
      className="modal-overlay"
      onClick={() => setSelectedResult(null)} // Close modal when clicking the overlay
    ></div>
  );
}

export default ModalOverlay;
