import React from "react";
import { StatusMessage } from "../reducer/messageReducer";

interface Props {
  message: StatusMessage;
}
export function Message(props: Props) {
  const { message } = props;
  const { text, visibility } = message;
  const { picture, name } = message.meta.createdBy;
  const emoji = visibility === "public" ? "🌍" : "🔒";
  const emojiTitle = visibility === "public"
    ? "This message is public: anyone can read it."
    : "This message is private: your are the only one who can read it.";

  return (
    <div className="bg-white rounded-lg shadow p-6 flex">
      <img
        className="h-16 w-16 rounded-full mx-0 mr-3"
        src={picture}
        alt={name}
      />
      <div className="text-center md:text-left">
        <p className="text-gray-600">
          {name}
          <span aria-label={visibility} title={emojiTitle} style={{ cursor : 'help' }}>
            {" "}
            {emoji}
          </span>
        </p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
