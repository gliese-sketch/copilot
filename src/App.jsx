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
    const newQuotes = [];

    for (let quote of quotes) {
      if (quote.id === id && quote.likes < 10) {
        // newQuotes.push({ likes: quote.likes + 1, ...quote }); // ❌🙏 Don't Use
        newQuotes.push({ ...quote, likes: quote.likes + 1 });
      } else {
        newQuotes.push(quote);
      }
    }

    setQuotes(newQuotes);
  };

  const handleDislike = (id) => {
    const newQuotes = [];

    for (let quote of quotes) {
      if (quote.id === id && quote.likes > 0) {
        newQuotes.push({ ...quote, likes: quote.likes - 1 });
      } else {
        newQuotes.push(quote);
      }
    }

    setQuotes(newQuotes);
  };

  return (
    <>
      <header>
        <h1>Copilot</h1>
      </header>

      <Form onSubmit={addQuote} />

      {quotes.map((quote) => (
        <pre key={quote.id}>
          <h3>{quote.text}</h3>
          <p>{quote.likes}</p>
          <div style={{ display: "flex", gap: "6px" }}>
            <button onClick={() => handleLike(quote.id)}>Like</button>
            <button onClick={() => handleDislike(quote.id)}>Dislike</button>
            <button onClick={() => deleteQuote(quote.id)}>Delete</button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;
