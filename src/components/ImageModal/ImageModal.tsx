import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../unsplash-api";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  data: Image | null;
};

export default function ImageModal({ isOpen, onRequestClose, data }: Props) {
  if (!data) {
    return null;
  }

  const { urls, description, user, likes } = data;
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <button className={css.modalCloseBtn} onClick={onRequestClose}>
          X
        </button>
        <div>
          <img className={css.modalImg} src={urls.regular} alt={description} />
          <h2 className={css.modaltitle}>{description || "No Description"}</h2>
          <p className={css.modalAfterTitle}>Autor: {user.name}</p>
          <p className={css.modalAfterTitle}>Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
}
