import React from "react";

export function MessageInput() {
  return (
    <div className="bg-white rounded-lg shadow flex">
      <textarea
        className="min-w-full p-6"
        placeholder={"Your status message..."}
      ></textarea>
      <select name="visibility" id="">
        <option value="public">Visible pour tout le monde</option>
        <option value="private">Mes amis seulement</option>
      </select>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Post
      </button>
    </div>
  );
}
