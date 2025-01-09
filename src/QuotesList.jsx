import { HandThumbsUp, HandThumbsDown, Trash } from "react-bootstrap-icons";

function QuotesList({ quotes, onLike, onDislike, onDelete }) {
  return (
    <div>
      {quotes.map((quote) => (
        <pre key={quote.id}>
          <h3>{quote.text}</h3>
          <p>{quote.likes}</p>
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={() => onDislike(quote.id)}
              disabled={quote.likes === 0}
            >
              <HandThumbsDown />
            </button>
            <button
              onClick={() => onLike(quote.id)}
              disabled={quote.likes === 10}
            >
              <HandThumbsUp />
            </button>

            <button
              style={{ background: "red" }}
              onClick={() => onDelete(quote.id)}
            >
              <Trash />
            </button>
          </div>
        </pre>
      ))}
    </div>
  );
}

export default QuotesList;
