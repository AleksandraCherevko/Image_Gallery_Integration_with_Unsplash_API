import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.errorMessage}>
      Ooooops! Something went wrong. Please, restart this page!
    </p>
  );
}
