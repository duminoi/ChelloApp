import React, { useRef, useState } from "react";

export default function TaskItem({ _id, content, column }) {
  const [isHover, setHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleChangeContent = () => {};
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative task"
      data-id={_id}
    >
      {isEditing ? (
        <input
          value={content}
          onChange={handleChangeContent}
          type="text"
          className="my-auto p-2 h-full border-none border-transparent w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words bg-transparent"
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p
          onDoubleClick={handleEdit}
          className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words"
        >
          {content}
        </p>
      )}
      {isHover && (
        <div className="flex">
          <button className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-teal-600 p-2 rounded opacity-60 hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
