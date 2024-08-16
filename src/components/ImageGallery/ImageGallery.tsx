import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../unsplash-api";

type Props = {
  items: Image[];
  onImageClick: (image: Image) => void;
};

export default function ImageGallery({ items, onImageClick }: Props) {
  return (
    <ul className={css.imgGalList}>
      {items.map((image: Image) => (
        <li className={css.imgGalItem} key={image.id}>
          <ImageCard image={image} openModal={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
