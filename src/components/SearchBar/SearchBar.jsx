export default function SearchForm({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button>Search</button>
      </form>
    </header>
  );
}

// <header>
//   <form>
//     <input
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//     <button type="submit">Search</button>
//   </form>
// </header>
