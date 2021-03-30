import React from "react";

function Result({ text, result, isPalindrome }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div id="result" className="ms-2 me-auto">
        <div id="text" className="font-weight-bold">
          {text}
        </div>
        {result}
      </div>
      {isPalindrome && (
        <span id="palindrome-flag" className="badge badge-primary badge-pill">
          palindrome
        </span>
      )}
    </li>
  );
}

export default Result;
