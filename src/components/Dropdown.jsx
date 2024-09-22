import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

function DropdownMenu({ name, content }) {
  const [anchorEl, setAnchorEl] = useState(null);
  //   const [isHover, setIsHover] = useState(null);
  const handleClick = (event) => {
    // Nếu anchorEl đã có giá trị, tức là menu đang mở, thì đóng menu
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      // Nếu không, mở menu
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const bgColor = isHover ? "#baaeae00" : "";
  return (
    <div>
      <Button
        onClick={handleClick}
        aria-controls={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          ":hover": {
            bgcolor: "#fff",
          },
        }}
      >
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {content.map((item, id) => (
          <MenuItem onClick={handleClose} key={id}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownMenu;
