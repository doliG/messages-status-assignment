import React, { useReducer, useEffect } from "react";
import {
  messageReducer,
  initialState,
  Visibility,
  fetch,
  fetchSuccess,
  addMessage,
} from "../reducer/messageReducer";
import { Message } from "../components/Message";
import { mockMessages, mockMessage } from "../../datas";
import { MessageForm } from "../components/MessageForm";

export function Messages() {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const { messages, status, error } = state;
  useEffect(() => {
    dispatch(fetch());
    // This timeout should be replaced by API Call / fetcher func
    const timer = setTimeout(
      (_) => dispatch(fetchSuccess(mockMessages)),
      500
    );
    return () => clearTimeout(timer);
  }, []);

  const submitMessage = (text: string, visibility: Visibility) => {
    const id = Math.floor(Math.random() * 100000);
    dispatch(addMessage({ ...mockMessage, id, text, visibility }));
  };

  return (
    <div className="mx-auto max-w-md">
      <p>
        <b>Status:</b> {status}
        <br />
        {error && (
          <>
            <b>Error:</b> {error}
          </>
        )}
      </p>
      <h1 className="text-4xl text-orange-600">Messages</h1>
      <div className="m-2 max-w-md">
        <MessageForm submit={submitMessage} />
      </div>
      {status === "fetching" && <p>Please wait...</p>}
      {status === "ready" &&
        messages.map((message) => (
          <div className="m-2 max-w-md" key={message.id}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
}
