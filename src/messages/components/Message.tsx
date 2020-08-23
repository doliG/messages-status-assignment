import React from "react";
import { IMessage } from "../messageReducer";

interface Props {
  message: IMessage;
}
export function Message(props: Props) {
  const { message } = props;
  const { text } = message;
  const { picture, name } = message.meta.createdBy;
  return (
    <div className="bg-white rounded-lg shadow p-6 flex">
      <img
        className="h-16 w-16 rounded-full mx-0 mr-3"
        src={picture}
        alt={name}
      />
      <div className="text-center md:text-left">
        <p className="text-gray-600">{name}</p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}