import React, { useEffect } from "react";
import ColumnItem from "./ColumnItem";
import { useDispatch, useSelector } from "react-redux";
import { addColumn, fetchTasks, postTasks } from "../../store/taskReducer";
import { cloneData } from "../../store/customData";
import { v4 as uuidv4 } from "uuid";

export default function ColumnsList() {
  console.log("vào columnsList");

  const dispatch = useDispatch();
  const { apiKey } = useSelector((state) => state.chello);
  const { columns, tasks } = useSelector((state) => state.tasks);
  console.log("columns", columns);

  const handleAddColumn = () => {
    // //Cập nhật UI trước
    const dataUi = {
      column: "fake",
      columnName: `Columns ${columns.length + 1}`,
      id: "fake",
    };

    dispatch(addColumn(dataUi));
    //call Api
    console.log("columns", columns);
    console.log("tasks", tasks);

    const clone = cloneData(columns, tasks).filter((item) => {
      return item !== undefined;
    });
    console.log("clone", clone);

    console.log("columns.length ", columns.length + 1);

    const data = {
      apiKey: apiKey,
      data: [
        ...clone,
        {
          content: `Write something...`,
          column: `Column ${uuidv4()}`,
          columnName: `column ${uuidv4()}`,
        },
      ],
    };
    console.log("data", data);

    dispatch(postTasks(data));
  };
  useEffect(() => {
    dispatch(fetchTasks(apiKey));
  }, []);
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
          {columns.map((item) => (
            <ColumnItem key={item._id} {...item}></ColumnItem>
          ))}
        </div>
        {/* end column list */}
        <button
          onClick={handleAddColumn}
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
