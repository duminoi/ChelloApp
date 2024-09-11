import React from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import ColumnsList from "./components/Columns/ColumnsList";

export default function App() {
  console.log("vào App");

  const { apiKey } = useSelector((state) => state.chello);
  console.log("apiKey", apiKey);
  return (
    <div className="bg-mainColor">{!apiKey ? <Login /> : <ColumnsList />}</div>
  );
}
