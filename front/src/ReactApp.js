import React, { Component } from "react";
import InputBox from "./components/InputBox";
import ResultsList from "./components/ResultsList";
import apiService from "./services/apiService";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { text } = this.state;
    if (text.length === 0) return;

    apiService.get(`iecho?text=${text}`).then((res) => {
      console.log(res.data);

      this.setState((state) => ({
        results: [
          {
            text,
            result: res.data.text,
            isPalindrome: res.data.palindrome,
            id: Date.now(),
          },
          ...state.results,
        ],
        text: "",
      }));
    });
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="container-fluid py-3 mx-auto bg-danger">
          <InputBox
            value={this.state.text}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </nav>
        <main className="min-vh-100 py-4">
          <ResultsList results={this.state.results} />
        </main>
      </div>
    );
  }
}

export default App;
