import React from "react";

function InputBox({ value, onChange, onSubmit }) {
  return (
    <div className="container d-flex justify-content-center">
      <form className="d-flex w-75" onSubmit={onSubmit}>
        <input
          type="search"
          className="form-control me-2"
          value={value}
          onChange={onChange}
          placeholder="Insert Text"
          aria-label="Insert Text"
        ></input>
        <button className="btn btn-primary mx-4 px-4" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default InputBox;
