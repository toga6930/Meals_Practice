import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMeal: title,
    strMealThumb: image,
    strInstructions: text,
    strSource: source
  } = selectedMeal;

  return (
    <aside className="modal">
      <div className="modal-container">
        <img src={image} className="img modal-img" alt="sewey" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p> {text}</p>
          <a href={source} target="blank">
            Original Source
          </a>
          <button className="btn close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
