// import React, { useState } from "react";
// import { TextField, InputAdornment } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     console.log("Search term:", searchTerm);
//     // Thực hiện tìm kiếm ở đây
//   };

//   return (
//     <TextField
//       variant="outlined"
//       placeholder="Search..."
//       value={searchTerm}
//       onChange={handleSearchChange}
//       onKeyPress={(event) => {
//         if (event.key === "Enter") {
//           handleSearch(); // Gọi hàm tìm kiếm khi nhấn Enter
//         }
//       }}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <SearchIcon />
//           </InputAdornment>
//         ),
//       }}
//       sx={{
//         margin: "20px 0", // Cách điệu thêm nếu cần
//       }}
//     />
//   );
// }

// export default SearchBar;
