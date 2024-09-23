import React from "react";
import TaskItem from "./Tasks/TaskItem";
import { useSelector } from "react-redux";
export default function TaskList({ column }) {
  const { tasks } = useSelector((state) => state.tasks);
  console.log("tasks", tasks);

  // const tasks = [
  //   {
  //     id: "ldfger",
  //     content: "buy the house",
  //     columnId: "2",
  //   },
  //   {
  //     id: "rrr",
  //     content: "ssdf",
  //     columnId: "2",
  //   },
  //   {
  //     id: "ldftytger",
  //     content: "sdf",
  //     columnId: "2",
  //   },
  //   {
  //     id: "ldfgyurrtr",
  //     content: "444444",
  //     columnId: "2",
  //   },
  // ];
  return (
    <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
      {tasks.map((item) => {
        if (item.column === column) {
          return <TaskItem key={item._id} {...item}></TaskItem>;
        }
      })}
    </div>
  );
}
