import React, { useState } from "react";
import TaskList from "./Tasks/TaskList";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteColumn,
  postTasks,
  updateColumn,
} from "../../store/taskReducer";
import { cloneData } from "../../store/customData";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function ColumnItem({ _id, columnName, column }) {
  const [isEditing, setIsEditing] = useState(false);
  const { apiKey } = useSelector((state) => state.chello);
  const { columns, tasks } = useSelector((state) => state.tasks);
  const [inputValue, setInputValue] = useState(columnName);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: _id });
  // console.log("attributes", attributes);
  // console.log("listeners", listeners);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dispatch = useDispatch();
  // console.log("columns", columns);
  // console.log("tasks", tasks);

  const clone = cloneData(columns, tasks);
  const data = {
    apiKey: apiKey,
    data: [
      ...clone,
      {
        content: `Task ${tasks.length + 1}`,
        column: column,
        columnName: columnName,
      },
    ],
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleBlur = (e) => {
    console.log(e.target.dataset.id);

    setIsEditing(false);
    console.log("inputValue", inputValue);
    const filterColumn = columns.map((columnItem) => {
      if (columnItem._id === e.target.dataset.id) {
        return { ...columnItem, columnName: inputValue };
      }
      return columnItem;
    });
    //Update UI first
    dispatch(updateColumn(filterColumn));
    //call api
    console.log("filterColumn", filterColumn);
    const clone = cloneData(filterColumn, tasks);
    const data = {
      apiKey: apiKey,
      data: clone,
    };
    dispatch(postTasks(data));
  };

  const handleChangeColumns = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTasks = () => {
    console.log("tasks", tasks);
    //Update UI first
    const dataUi = {
      content: `Task ${tasks.length + 1}`,
      column: column,
      columnName: columnName,
    };
    dispatch(addTask(dataUi));
    //Call api
    dispatch(postTasks(data));
  };

  const handleDeleteColumn = (e) => {
    const filterColumn = columns.filter((column) => {
      return column._id !== e.target.dataset.id;
    });
    //Update UI first
    console.log("filterColumn", filterColumn);
    dispatch(deleteColumn(filterColumn));
    const clone = cloneData(filterColumn, tasks).filter((item) => {
      return item !== undefined;
    });

    const data = {
      apiKey: apiKey,
      data: clone,
    };
    //Call Api
    dispatch(postTasks(data));
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
              data-id={_id}
              autoFocus
              type="text"
              onChange={handleChangeColumns}
              value={inputValue}
              onBlur={handleBlur}
              className="w-full"
            />
          ) : (
            <p className="w-full">{columnName}</p>
          )}
        </div>
        <button
          data-id={_id}
          onClick={handleDeleteColumn}
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
            data-id={_id}
            onClick={handleDeleteColumn}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6"
          >
            <path
              data-id={_id}
              onClick={handleDeleteColumn}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>

      <TaskList column={column} columnName={columnName} />

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
