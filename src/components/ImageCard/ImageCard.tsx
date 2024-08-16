import css from "./ImageCard.module.css";
import { Image } from "../unsplash-api";

type Props = {
  image: Image;
  openModal: (image: Image) => void;
};

export default function ImageCard({ image, openModal }: Props) {
  const { urls, description } = image;
  return (
    <div onClick={() => openModal(image)}>
      <img className={css.imgCard} src={urls.small} alt={description} />
    </div>
  );
}
