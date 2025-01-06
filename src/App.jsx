import { useState } from "react";
import Form from "./Form";

function App() {
  const [quotes, setQuotes] = useState([]);

  const updateQuotes = (quote) => {
    const newQuote = {
      id: crypto.randomUUID(),
      text: quote,
    };

    setQuotes([newQuote, ...quotes]);
  };

  const deleteQuote = (id) => {
    const newQuotes = quotes.filter((q) => q.id !== id);
    setQuotes(newQuotes);
  };

  return (
    <>
      <header>
        <h1>Add Quotes</h1>
      </header>

      <Form onSubmit={updateQuotes} />

      {quotes.map((quote) => (
        <pre key={quote.id}>
          <h3>{quote.text}</h3>{" "}
          <button onClick={() => deleteQuote(quote.id)}>Delete</button>
        </pre>
      ))}
    </>
  );
}

export default App;
