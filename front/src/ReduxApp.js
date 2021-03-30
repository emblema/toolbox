import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestResult } from "./store/reducer";
import InputBox from "./components/InputBox";
import ResultsList from "./components/ResultsList";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const results = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const onTextChanged = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(requestResult(text));
      setText("");
    }
  };

  return (
    <div className="container-fluid p-0">
      <nav className="container-fluid py-3 mx-auto bg-danger">
        <InputBox value={text} onChange={onTextChanged} onSubmit={onSubmit} />
      </nav>
      <main className="min-vh-100 py-4">
        <ResultsList results={results} />
      </main>
    </div>
  );
};

export default App;
