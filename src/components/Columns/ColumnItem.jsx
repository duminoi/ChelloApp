import React, { useState } from "react";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { postTasks } from "../../store/taskReducer";

export default function ColumnItem({ _id, columnName, column }) {
  const [isEditing, setIsEditing] = useState(false);
  const { apiKey } = useSelector((state) => state.chello);
  const { columns } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const data = {
    apiKey: apiKey,
    data: [
      {
        column: "hello",
        content: "hiihi",
        columnName: "hello",
      },
    ],
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleChangeColumns = () => {};
  const handleAddTasks = () => {
    console.log("vào dây");

    dispatch(postTasks(data));
  };
  return (
    <div
      className="
      bg-white
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
    "
      data-id={_id}
    >
      <div
        onClick={handleEdit}
        role="button"
        tabIndex="0"
        aria-disabled="false"
        aria-roledescription="sortable"
        aria-describedby="DndDescribedBy-0"
        data-id={_id}
        className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4
        flex
        items-center
        justify-between
      "
      >
        <div className="flex gap-2">
          <div
            className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-sm
            rounded-full
          "
            data-id={_id}
          >
            0
          </div>
          {isEditing ? (
            <input
              autoFocus
              type="text"
              onChange={handleChangeColumns}
              value={columnName}
              onBlur={handleBlur}
              className="w-full"
            />
          ) : (
            <p className="w-full">{columnName}</p>
          )}
        </div>
        <button
          className="
          stroke-gray-500
          hover:stroke-teal
          hover:bg-white
          rounded
          px-1
          py-2
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <TaskList column={column} />
      {/* end taskList */}
      <button
        onClick={handleAddTasks}
        className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-teal-500 active:bg-teal-800"
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
        Add task
      </button>
      {/* end addTask */}
    </div>
  );
}
