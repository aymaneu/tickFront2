import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesCategoryData } from "../features/reducers/companyCaSlice";
import "../style/css/companyCat.css";
import { Link, useParams } from "react-router-dom";
import { Visibility } from "@material-ui/icons";

const CompanyCat = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompaniesCategoryData({ id: categoryId }));
  }, [dispatch]);
  const companies = useSelector((state) => state.companiesCategory.data);

  const columns = [
    { field: "companyId", headerName: "ID", width: 70 },
    { field: "companyName", headerName: "company Name", width: 150 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "email", headerName: "Email", width: 175 },
    { field: "name", headerName: "category", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/getOneCompany/" + params.row.companyId}>
              <button className="companyListEdit">Edit</button>
            </Link>
            <Link to={"/displayOneCompany/" + params.row.companyId}>
              <button className="widgetCatButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </Link>
          </>
        );
      },
    },
  ];
  const noCompanies = [
    {
      companyId: 1,
      companyName: 0,
      status: 0,
      name: 0,
      action: 0,
      email: 0,
    },
  ];
  const condition = companies.length == 1;

  const bb = condition ? (
    <DataGrid
      getRowId={(r) => r.companyId}
      rows={companies}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  ) : (
    <DataGrid
      getRowId={(r) => r.companyId}
      rows={noCompanies}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );

  return (
    <div className="companyCat">
      <Link to="/newCompany">
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
        {bb}
      </div>
    </div>
  );
};

export default CompanyCat;
