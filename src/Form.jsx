import { useState } from "react";

function Form({ onSubmit }) {
  const [quote, setQuote] = useState(""); // For input

  const handleSubmit = (event) => {
    event.preventDefault(); // Avoid page reload

    onSubmit(quote); // Updating the parent state

    setQuote(""); // Empty the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ display: "flex", gap: "6px" }}>
        <legend>Add a quote</legend>
        <input
          type="text"
          name="quote"
          placeholder="Enter a quote"
          autoComplete="off"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
}

export default Form;
