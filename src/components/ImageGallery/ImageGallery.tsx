import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.imgGalList}>
      {items.map((item) => (
        <li
          className={css.imgGalItem}
          key={item.id}
          onClick={() => onImageClick(item)}
        >
          <ImageCard name={item} />
        </li>
      ))}
    </ul>
  );
}
