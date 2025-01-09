import { useReducer } from "react";

// Components
import Form from "./Form";
import QuotesList from "./QuotesList";

const quotesReducer = () => {};

function App() {
  const [quotes, dispatch] = useReducer(quotesReducer, []);

  // const addQuote = (quote) => {
  //   const newQuote = {
  //     id: crypto.randomUUID(),
  //     text: quote,
  //     likes: 1,
  //   };

  //   setQuotes([newQuote, ...quotes]);
  // };

  // const deleteQuote = (id) => {
  //   setQuotes(quotes.filter((q) => q.id !== id));
  // };

  // const handleLike = (id) => {
  //   setQuotes(
  //     quotes.map((quote) =>
  //       quote.id === id ? { ...quote, likes: quote.likes + 1 } : quote
  //     )
  //   );
  // };

  // const handleDislike = (id) => {
  //   setQuotes(
  //     quotes.map((quote) =>
  //       quote.id === id ? { ...quote, likes: quote.likes - 1 } : quote
  //     )
  //   );
  // };

  // const quoteSort = () => {
  //   setQuotes([...quotes].sort((a, b) => b.likes - a.likes));
  // };

  return (
    <>
      <header>
        <h1>Copilot</h1>
      </header>

      <Form
        onSubmit={(value) => dispatch({ type: "ADD", payload: value })}
        onSort={() => dispatch({ type: "SORT" })}
      />

      <QuotesList
        quotes={quotes}
        onLike={(id) => dispatch({ type: "LIKE", payload: id })}
        onDislike={(id) => dispatch({ type: "DISLIKE", payload: id })}
        onDelete={(id) => dispatch({ type: "DELETE", payload: id })}
      />
    </>
  );
}

export default App;
