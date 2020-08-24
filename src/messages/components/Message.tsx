import React from "react";
import { IMessage } from "../messageReducer";

interface Props {
  message: IMessage;
}
export function Message(props: Props) {
  const { message } = props;
  const { text, visibility } = message;
  const { picture, name } = message.meta.createdBy;
  const emoji = visibility === "public" ? "🌍" : "🔒";

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
          <span aria-label={visibility} title={visibility}> {emoji}</span>
        </p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
