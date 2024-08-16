import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  hasMore: boolean;
};

export default function LoadMoreBtn({ onClick, hasMore }: Props) {
  return (
    hasMore && (
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    )
  );
}
