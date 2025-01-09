import { useState } from "react";
import { Funnel, PlusLg } from "react-bootstrap-icons";

function Form({ onSubmit, onSort }) {
  const [quote, setQuote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!quote.trim()) return;

    onSubmit(quote.trim());
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
          <Funnel />
        </button>
        <button type="submit" disabled={!quote}>
          <PlusLg />
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
