import React, { useState, ChangeEvent, FormEvent } from "react";
import { Visibility } from "../reducer/messageReducer";

type Props = {
  submit: Function;
};
export function MessageForm(props: Props) {
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState<Visibility>("public");

  const onSubmit = (event: React.FormEvent | React.KeyboardEvent) => {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    props.submit(message, visibility);
    setMessage("");
  };

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);
  const onVisibilityChange = (event: React.ChangeEvent<HTMLSelectElement>) => setVisibility(event.target.value as Visibility);
  const onKeyDown = (event: React.KeyboardEvent) => (event.keyCode === 13 && event.metaKey) && onSubmit(event);

  return (
    <form onSubmit={onSubmit} className="bg-white shadow p-6 pb-3 rounded">
      <textarea
        className="min-w-full focus:outline-none"
        placeholder={"Your status message..."}
        value={message}
        onChange={onMessageChange}
        onKeyDown={onKeyDown}
      ></textarea>
      <div className="flex justify-end">
        <div className="relative mr-1">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={visibility}
            onChange={onVisibilityChange}
          >
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <option value="public">🌍 Public</option>
            <option value="private">🔒 Privé</option>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded"
          type="submit"
          onClick={onSubmit}
        >
          Post
        </button>
      </div>
    </form>
  );
}
