import React, { useReducer, useEffect } from "react";
import { mockMessages, mockMessage } from "./datas";
import { messageReducer, initialState, MessageState } from './messages/messageReducer';
import "./App.css";

function App() {
  const [state, dispatch]: [MessageState, Function] = useReducer(
    messageReducer,
    initialState
  );
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
  useEffect(() => {
    const timer = setTimeout(
      (_) => dispatch({ type: "add message", payload: mockMessage }),
      2000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <p>
        <b>Status:</b> {status}
        {error && <span><br /><b>Error:</b> {error}</span>}
      </p>
      {status === 'fetching' && <p>Please wait...</p>}
      <pre>{status === 'ready' && JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}

export default App;
