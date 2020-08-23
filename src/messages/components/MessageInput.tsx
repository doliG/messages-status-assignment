import React from "react";

export function MessageInput() {
  return (
    <div className="bg-white shadow p-6 pb-3 rounded">
      <textarea
        className="min-w-full focus:outline-none"
        placeholder={"Your status message..."}
      ></textarea>
      <div className="flex justify-end">
        <div className="relative mr-1">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
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
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded">
          Post
        </button>
      </div>
    </div>
  );
}
