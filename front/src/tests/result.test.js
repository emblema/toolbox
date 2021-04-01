import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Result from "../components/Result";

let container = null;

describe("Results component", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders results properly", () => {
    act(() => {
      render(
        <Result text="abc" result="cba" isPalindrome={false} />,
        container
      );
    });

    expect(container.querySelector("#text").textContent).toBe("abc");
    expect(container.querySelector("#result").textContent).toContain("cba");
    expect(container.querySelector("#palindrome-flag")).toBeNull();
  });

  it("renders palindrome flag properly", () => {
    act(() => {
      render(<Result text="aba" result="aba" isPalindrome={true} />, container);
    });

    expect(container.querySelector("#palindrome-flag").textContent).toBe(
      "palindrome"
    );
  });
});
