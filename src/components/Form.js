import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.city}
        placeholder="Wpisz miasto..."
        onChange={props.onChange}
      />
      <button>Podaj miasto</button>
    </form>
  );
};

export default Form;
