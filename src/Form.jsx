import { useState } from "react";

function Form({ onSubmit, onSort }) {
  const [quote, setQuote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!quote.trim()) return;

    onSubmit(quote);
    setQuote("");
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
        <button style={{ background: "tomato" }} type="button" onClick={onSort}>
          Sort
        </button>
        <button type="submit" disabled={!quote}>
          Add
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
