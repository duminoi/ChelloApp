import React from "react";
import ColumnsList from "../components/Columns/ColumnsList";
import Header from "./Header";

export default function Home() {
  console.log("vào home");
  return (
    <div>
      {/* <Header /> */}
      <ColumnsList></ColumnsList>
    </div>
  );
}
