import { useState } from "react";

function Form() {
  const [book, setBook] = useState(""); // For input

  const handleSubmit = (event) => {
    event.preventDefault(); // Avoid page reload

    console.log(book);
    setBook(""); // Empty the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a book</legend>
        <input
          type="text"
          name="quotes"
          id="quotes"
          placeholder="Enter a book"
          autoComplete="off"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
}

export default Form;
