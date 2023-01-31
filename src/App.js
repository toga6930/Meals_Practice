import { useGlobalContext } from "./context";

import Favorite from "./components/Favorite";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorite />}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}
