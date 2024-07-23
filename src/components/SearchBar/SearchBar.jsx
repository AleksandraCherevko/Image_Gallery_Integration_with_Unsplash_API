import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.name);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
