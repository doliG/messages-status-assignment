import React, { useReducer, useEffect } from "react";
import { messageReducer, initialState, Visibility } from "../messageReducer";
import { Message } from "../components/Message";
import { mockMessages, mockMessage } from "../../datas";
import { MessageInput } from "../components/MessageInput";

export function Messages() {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const { messages, status, error } = state;
  useEffect(() => {
    dispatch({ type: "fetch" });
    // This timeout should be replaced by API Call / fetcher func
    const timer = setTimeout(
      (_) => dispatch({ type: "fetch success", payload: mockMessages }),
      500
    );
    return () => clearTimeout(timer);
  }, []);

  const addMessage = (text: string, visibility: Visibility) => {
    dispatch({
      type: "add message",
      payload: { ...mockMessage, text, visibility },
    });
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
        <MessageInput submit={addMessage} />
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
