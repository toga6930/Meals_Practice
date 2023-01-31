import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>Nope</h4>
      </section>
    );
  }
  return (
    <section className="section">
      {meals &&
        meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <article key={idMeal} className="singlemeal">
              <img
                src={image}
                className="img"
                alt="sewey"
                onClick={() => selectMeal(idMeal)}
              />
              <footer>
                <h5>{title}</h5>
                <button
                  className="likebtn"
                  onClick={() => addToFavorites(idMeal)}
                >
                  <BsHandThumbsUp />
                </button>
              </footer>
            </article>
          );
        })}
    </section>
  );
};

export default Meals;
