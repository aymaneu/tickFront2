import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesData } from "../features/reducers/companySlice";
import "../style/css/companyCat.css";
import { Link, useParams } from "react-router-dom";
import { Visibility, DeleteOutline } from "@material-ui/icons";
import { fetchServiceData } from "../features/reducers/agencySlice2";

const CategoriesAll = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceData());
  }, [dispatch]);
  const categoriesData = useSelector((state) => state.categories.data);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Category Name", width: 150 },
    { field: "adminId", headerName: "admin", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editCategory/" + params.row.id}>
              <button className="companyListEdit">Edit</button>
            </Link>
            <Link to={"/displayOneCompany/" + params.row.id}>
              <button className="widgetCatButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </Link>
            <DeleteOutline
              className="companyListDelete"
              onClick={() => {
                dispatch(deleteCategoryData({ id: params.row.id }));
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="companyCat">
      <Link to="/newCategory">
        <button className="companyAddButton">create</button>
      </Link>
      <div
        style={{
          height: 400,
          width: "95%",
          margin: "auto",
        }}
        className="companyList"
      >
        <DataGrid
          getRowId={(r) => r.id}
          rows={categoriesData}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default CategoriesAll;
