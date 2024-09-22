import React, { useState } from "react";
import imgTrello from "../assets/img/trello.png";
import DropdownMenu from "../components/Dropdown";

import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const content = [
    {
      name: "Workspace",
      content: ["workpace 1", "workpace 2", "workpace 3"],
    },
    {
      name: "More",
      content: ["Recent board", "Starred boards", "Template"],
    },
  ];

  return (
    <div className="header flex p-5 pl-7 gap-4 justify-between">
      <div className="flex gap-4">
        <div className="Icon flex gap-3">
          <img src={imgTrello} alt="" />
          <div className="text-3xl flex items-center">Trello</div>
        </div>
        {/* end icon */}
        {content.map((item, id) => (
          <DropdownMenu key={id} {...item}></DropdownMenu>
        ))}
      </div>
      {/* end left */}
      <div className="flex relative">
        <input type="text" className="form-control bg-[#e7e7df99] h-[2rem]" />
      </div>
    </div>
  );
}
