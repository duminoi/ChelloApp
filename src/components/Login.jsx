import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApikey, getEmail } from "../store/chelloReducer";

export default function Login() {
  const { inputEmail } = useSelector((state) => state.chello);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchApikey(inputEmail));
  };
  const handleChange = (e) => {
    dispatch(getEmail(e.target.value));
  };
  return (
    <div className="flex bg-mainColor fixed inset-0 items-center justify-center flex-col">
      <h1 className="text-2xl font-semibold">Enter the email</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className=" border-teal-950 p-4 w-full"
        />
      </form>
    </div>
  );
}
