//react
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//redux

//style
import "../style/css/createCategory.css";
//mui
import { TextField, Button } from "@mui/material";
import { fetchServiceData } from "../features/reducers/agencySlice2";

const EditCategory = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  //initial state, new values container for company
  const [editCategory, setEditCategory] = useState("");

  const goBoy = {
    editCategory,
  };
  // handling changes
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(fetchServiceData({ goBoy, id: id }));
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
        onChange={(e) => setEditCategory(e.target.value)}
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

export default EditCategory;
