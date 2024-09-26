import React, { useEffect } from "react";
import ColumnItem from "./ColumnItem";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../store/taskReducer";
import {
  addColumn,
  fetchTasks,
  postTasks,
  updateColumn,
} from "../../store/taskReducer";
import { cloneData } from "../../store/customData";
import { v4 as uuidv4 } from "uuid";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

export default function ColumnsList() {
  console.log("vào columnsList");

  const dispatch = useDispatch();
  const { apiKey } = useSelector((state) => state.chello);
  const { columns, tasks } = useSelector((state) => state.tasks);
  // console.log("columns", columns);

  const handleAddColumn = () => {
    // //update UI first
    const dataUi = {
      column: "fake",
      columnName: `Columns ${columns.length + 1}`,
      id: "fake",
    };

    dispatch(addColumn(dataUi));
    //call Api
    const clone = cloneData(columns, tasks).filter((item) => {
      return item !== undefined;
    });
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
    dispatch(postTasks(data));
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("active", active);
    console.log("over", over);

    // console.log("active.id", active.id);
    // console.log("over.id", over.id);

    const activeIndexColumn = columns.findIndex(
      (column) => column._id === active.id
    );
    const overIndexColumn = columns.findIndex(
      (column) => column._id === over.id
    );
    const activeIndexTask = tasks.findIndex((item) => {
      return item._id === active.id;
    });
    const overIndexTask = tasks.findIndex((item) => {
      return item._id === over.id;
    });

    const afterMoveArrColumn = arrayMove(
      columns,
      activeIndexColumn,
      overIndexColumn
    );
    dispatch(updateColumn(afterMoveArrColumn));
    if (active.id !== over.id) {
      const newArrayTask = arrayMove(tasks, activeIndexTask, overIndexTask);
      console.log("newArray", newArrayTask);
      dispatch(updateTask(newArrayTask));
    }
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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-4">
            <SortableContext
              items={columns.map((column) => column._id)}
              strategy={horizontalListSortingStrategy}
            >
              {columns.map((item) => (
                <ColumnItem key={item._id} {...item}></ColumnItem>
              ))}
            </SortableContext>
          </div>
        </DndContext>
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
