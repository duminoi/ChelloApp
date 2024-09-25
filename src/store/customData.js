import { useSelector } from "react-redux";
const cloneData = (columns, tasks) => {
  return tasks.map((taskItem) => {
    let newTask = {};
    columns.forEach((columnItem) => {
      if (taskItem.column === columnItem.column) {
        newTask = {
          column: columnItem.column,
          columnName: columnItem.columnName,
          content: taskItem.content,
        };
      }
    });
    if (Object.keys(newTask).length > 0) {
      return newTask;
    }
  });
};

// const crudData = (name, column, columnName,action) => {
//   const { columns, tasks } = useSelector((state) => state.tasks);
//   const { apiKey } = useSelector((state) => state.chello);
//   const clone = cloneData(columns, tasks);
//   switch(action){
//     case "delete":
//       return {
//         apiKey:
//         data:[

//         ]
//       }

//   }
//   let data = {
//     apiKey: apiKey,
//     data: [
//       ...clone,
//       {
//         content: `${name} ${columns.length}`,
//         column: column,
//         columnName: columnName,
//       },
//     ],
//   };
//   return data;
// };
export { cloneData };
