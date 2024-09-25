import React from "react";
import TaskItem from "./Tasks/TaskItem";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { SortableContext } from "@dnd-kit/sortable";
export default function TaskList({ column, columnName }) {
  const { tasks } = useSelector((state) => state.tasks);
  // console.log("tasks", tasks);
  const endOfListRef = useRef(null);
  // console.log("tasks", tasks);
  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tasks]);
  return (
    <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
      {tasks.map((item) => {
        if (item.column === column) {
          return (
            <TaskItem
              key={item._id}
              {...item}
              column={column}
              columnName={columnName}
            ></TaskItem>
          );
        }
      })}
      <div ref={endOfListRef} />
    </div>
  );
}
