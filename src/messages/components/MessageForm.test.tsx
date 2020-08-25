import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MessageForm } from "./MessageForm";
import { Visibility } from "../reducer/messageReducer";

it("display a textarea", () => {
  const { getByPlaceholderText } = render(<MessageForm submit={() => 0} />);
  expect(getByPlaceholderText("Your status message...")).toBeDefined();
});

it("display select options for visibility", () => {
  const { getByDisplayValue } = render(<MessageForm submit={() => 0} />);
  expect(getByDisplayValue("🌍 Public")).toBeDefined();
});

it("display a submit button", () => {
  const { getByText } = render(<MessageForm submit={() => 0} />);
  expect(getByText("Post")).toBeDefined();
});

it("DO NOT submit when message is empty", () => {
  const handler = jest.fn();
  const { getByText } = render(<MessageForm submit={handler} />);
  fireEvent.click(getByText("Post"));
  expect(handler).not.toHaveBeenCalled();
});

it("DO NOT submit when message is spaces only", () => {
  const handler = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <MessageForm submit={handler} />
  );
  fireEvent.change(getByPlaceholderText("Your status message..."), {
    target: { value: "    " },
  });
  fireEvent.click(getByText("Post"));
  expect(handler).not.toHaveBeenCalled();
});

it("Submit message and visibility", () => {
  const handler = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <MessageForm submit={handler} />
  );

  // Type message
  fireEvent.change(getByPlaceholderText("Your status message..."), {
    target: { value: "test message" },
  });
  fireEvent.click(getByText("Post"));
  expect(handler).toHaveBeenCalledWith("test message", "public");
});
