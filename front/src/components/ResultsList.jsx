import React from "react";
import Result from "./Result";

function ResultsList({ results }) {
  return (
    <div className="results-list d-flex flex-column w-75 my-2 p-3 mx-auto bg-white">
      <h3 className="pt-4 mx-3 font-weight-normal">Results:</h3>
      <div className="d-flex align-items-center justify-content-center">
        <ol className="list-group list-group-numbered w-50">
          {results.map((res) => (
            <Result
              key={res.id}
              text={res.text}
              result={res.result}
              isPalindrome={res.isPalindrome}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ResultsList;
