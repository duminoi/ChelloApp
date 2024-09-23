import React from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Home from "./layout/Home";
import { selectApi } from "./store/selector";

export default function App() {
  console.log("vào App");

  // const { apiKey } = useSelector((state) => state.chello);
  const apiKey = useSelector(selectApi);

  return <div className="bg-mainColor">{!apiKey ? <Login /> : <Home />}</div>;
}
