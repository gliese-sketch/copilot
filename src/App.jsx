import { useReducer } from "react";

// Components
import Form from "./Form";
import QuotesList from "./QuotesList";

const quotesReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD":
      const newQuote = {
        id: crypto.randomUUID(),
        text: action.payload,
        likes: 1,
      };
      return [newQuote, ...prevState];
    case "DELETE":
      return prevState.filter((quote) => quote.id !== action.payload);
    case "SORT":
      return [...prevState].sort((a, b) => b.likes - a.likes);
    case "LIKE":
      return prevState.map((quote) =>
        quote.id === action.payload
          ? { ...quote, likes: quote.likes + 1 }
          : quote
      );
    case "DISLIKE":
      return prevState.map((quote) =>
        quote.id === action.payload
          ? { ...quote, likes: quote.likes - 1 }
          : quote
      );
    default:
      return prevState;
  }
};

function App() {
  const [quotes, dispatch] = useReducer(quotesReducer, []);

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
