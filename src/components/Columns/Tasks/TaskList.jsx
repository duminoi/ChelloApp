import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = [
    {
      id: "ldfger",
      content: "buy the house",
      columnId: "2",
    },
    {
      id: "rrr",
      content: "ssdf",
      columnId: "2",
    },
    {
      id: "ldftytger",
      content: "sdf",
      columnId: "2",
    },
    {
      id: "ldfgyurrtr",
      content: "444444",
      columnId: "2",
    },
  ];
  return (
    <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
      {tasks.map((item) => {
        return <TaskItem key={item.id} {...item}></TaskItem>;
      })}
    </div>
  );
}
