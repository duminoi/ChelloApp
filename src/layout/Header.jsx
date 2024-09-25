import React, { useEffect, useState } from "react";
import imgTrello from "../assets/img/trello.png";
import DropdownMenu from "../components/Dropdown";
import searchIcon from "../assets/img/searchIcon.svg";
import { Avatar, Button } from "antd";
import { UserOutlined, BellTwoTone } from "@ant-design/icons";
import { Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../store/chelloReducer";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { apiKey } = useSelector((state) => state.chello);

  const dispatch = useDispatch();

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
  const handleAvatar = (e) => {
    setAnchorEl(e.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(handleLogout(false));
    localStorage.setItem("apiKey", JSON.stringify(false));
  };

  return (
    <div className="header flex fixed min-w-full p-5 pl-7 gap-4 justify-between ">
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
      <div className="flex relative gap-4  items-center justify-center">
        <div className="search relative">
          <div className="searchIconWrapper left-2 top-2 absolute h-[1rem] w-[1rem]">
            <img src={searchIcon} alt="" className="" />
          </div>
          <input
            type="text"
            className="form-control p-3 pl-[2rem] bg-[#e7e7df99] h-[2rem]"
            placeholder="Search..."
          />
        </div>
        {/* end search */}
        <BellTwoTone className="text-3xl" />
        {/* <Avatar onClick={handleAvatar} className="" icon={<UserOutlined />} /> */}
        <AccountCircleIcon
          onClick={handleAvatar}
          color="primary"
          fontSize="large"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)} // Chuyển đổi anchorEl thành boolean
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </Menu>
        {/* end Avartar */}
      </div>
    </div>
  );
}
