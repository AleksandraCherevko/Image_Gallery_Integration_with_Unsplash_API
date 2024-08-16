import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

type Props = {
  onSearch: (newImg: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        if (values.name.trim() === "") {
          toast.error("🫠 Ooooops! Please, enter correct name for loading...");
        } else {
          onSearch(values.name);
          actions.resetForm();
          toast("🔥 Success request");
        }
      }}
    >
      <Form className={css.formFormik}>
        <Field
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formBtm} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
