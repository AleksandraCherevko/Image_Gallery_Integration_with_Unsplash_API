import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} type="button">
      Load more
    </button>
  );
}
