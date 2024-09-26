import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { updateTask } from "../../../store/taskReducer";

export default function TaskList({ column, columnName }) {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // console.log("tasks", tasks);
  const endOfListRef = useRef(null);

  const handleDragEnd = (event) => {
    console.log("drag end");
    const { active, over } = event;
    const activeIndex = tasks.findIndex((item) => {
      return item._id === active.id;
    });
    const overIndex = tasks.findIndex((item) => {
      return item._id === over.id;
    });
    // console.log("active", active.id);
    // console.log("over", over.id);
    console.log(active);
    if (active.id !== over.id) {
      const newArray = arrayMove(tasks, activeIndex, overIndex);
      console.log("newArray", newArray);
      dispatch(updateTask(newArray));
    }
  };

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tasks]);
  return (
    <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
      <SortableContext
        items={tasks.map((task) => task._id)}
        strategy={verticalListSortingStrategy}
      >
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
      </SortableContext>
      <div ref={endOfListRef} />
    </div>
  );
}
