import React from "react";
import { render } from "@testing-library/react";
import { Message } from "./Message";
import { mockMessage } from "../../datas";
import { StatusMessage } from "../reducer/messageReducer";

it("display a textarea", () => {
  const { getByText } = render(<Message message={mockMessage} />);
  expect(getByText(mockMessage.text)).toBeInTheDocument();
});

it("display author of the message", () => {
  const { getByText } = render(<Message message={mockMessage} />);
  expect(getByText(mockMessage.meta.createdBy.name)).toBeInTheDocument();
});

it("display tooltip to explain the public visibility of the message", () => {
  const mock: StatusMessage = { ...mockMessage, visibility: 'public' };
  const { getByTitle } = render(<Message message={mock} />);
  expect(getByTitle("This message is public: anyone can read it.")).toBeInTheDocument();
})

it("display tooltip to explain the private visibility of the message", () => {
  const mock: StatusMessage = { ...mockMessage, visibility: 'private' };
  const { getByTitle } = render(<Message message={mock} />);
  expect(getByTitle("This message is private: your are the only one who can read it.")).toBeInTheDocument();
})