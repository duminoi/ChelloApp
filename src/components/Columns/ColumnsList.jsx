import React from "react";
import ColumnItem from "./ColumnItem";

export default function ColumnsList() {
  const colums = [
    { id: 1, title: "Todo" },
    { id: 2, title: "Todo" },
    { id: 3, title: "Todo" },
  ];
  return (
    <div
      className="
        bg-mainColor
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
      "
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {colums.map((item) => (
            <ColumnItem key={item.id}></ColumnItem>
          ))}
        </div>
        {/* end column list */}
        <button
          className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            bg-[#00968863]
            border-2
            border-columnBackgroundColor
            p-4
            ring-teal-600
            hover:ring-2
            flex
            gap-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add Column
        </button>
        {/* end button */}
      </div>
    </div>
  );
}
