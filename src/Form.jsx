function Form() {
  return (
    <form>
      <fieldset>
        <legend>Add a book:</legend>
        <input
          type="text"
          name="quotes"
          id="quotes"
          placeholder="Enter a book"
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
}

export default Form;
