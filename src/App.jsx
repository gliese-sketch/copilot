import { useState } from "react";
import Form from "./Form";

function App() {
  const [quotes, setQuotes] = useState([]);

  const addQuote = (quote) => {
    const newQuote = {
      id: crypto.randomUUID(),
      text: quote,
      likes: 1,
    };

    setQuotes([newQuote, ...quotes]);
  };

  const deleteQuote = (id) => {
    setQuotes(quotes.filter((q) => q.id !== id));
  };

  const handleLike = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
      )
    );
  };

  const handleDislike = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
      )
    );
  };

  const quoteSort = () => {
    setQuotes([...quotes].sort((a, b) => b.likes - a.likes));
  };

  return (
    <>
      <header>
        <h1>Copilot</h1>
      </header>

      <Form onSubmit={addQuote} onSort={quoteSort} />

      {quotes.map((quote) => (
        <pre key={quote.id}>
          <h3>{quote.text}</h3>
          <p>{quote.likes}</p>
          <div style={{ display: "flex", gap: "6px" }}>
            <button onClick={() => handleLike(quote.id)}>Like</button>
            <button onClick={() => handleDislike(quote.id)}>Dislike</button>
            <button
              style={{ background: "red" }}
              onClick={() => deleteQuote(quote.id)}
            >
              Delete
            </button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;
