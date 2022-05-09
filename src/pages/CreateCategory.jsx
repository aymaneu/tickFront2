//react
import React, { useState } from "react";
import { useDispatch } from "react-redux";

//redux

//style
import "../style/css/createCategory.css";
//mui
import { TextField, Button } from "@mui/material";
import { fetchServiceData } from "../features/reducers/agencySlice2";

const CreateCategory = () => {
  const dispatch = useDispatch();
  //initial state, new values container for company
  const [categoryName, setCategoryName] = useState("");

  const goBoy = {
    categoryName,
  };
  // handling changes
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(fetchServiceData({ goBoy, id: 1 }));
  };
  return (
    <div
      style={{
        height: 400,
        width: "80%",
        margin: "auto",
        position: "relative",
        top: "30%",
      }}
      className="textField_div"
    >
      <TextField
        label="category name"
        variant="standard"
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Button
        style={{
          position: "relative",
          left: "85%",
        }}
        onClick={handlePost}
        variant="contained"
        sx={{ width: "150px", backgroundColor: "#3f3d56" }}
      >
        CREATE
      </Button>
    </div>
  );
};

export default CreateCategory;
