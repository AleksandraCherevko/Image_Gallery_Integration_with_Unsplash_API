import css from "./ImageCard.module.css";

export default function ImageCard({ name: { urls, description } }) {
  return (
    <div>
      <img className={css.imgCard} src={urls.small} alt={description} />
    </div>
  );
}
