import React from "react";
import ColumnsList from "../components/Columns/ColumnsList";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <ColumnsList></ColumnsList>
    </div>
  );
}
