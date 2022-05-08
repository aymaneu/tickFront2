import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesData } from "../features/reducers/companySlice";
import "../style/css/companyCat.css";
import { Link, useParams } from "react-router-dom";
import { Visibility } from "@material-ui/icons";

const CompaniesAll = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompaniesData());
  }, [dispatch]);
  const companies = useSelector((state) => state.companies.data);
  const columns = [
    { field: "accountId", headerName: "ID", width: 70 },
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
        <DataGrid
          getRowId={(r) => r.accountId}
          rows={companies}
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

export default CompaniesAll;
