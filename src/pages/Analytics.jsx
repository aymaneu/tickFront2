import React, { useEffect } from "react";
import "../style/css/analytics.css";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import "../style/css/companyCat.css";
import { Link, useParams } from "react-router-dom";
import { Visibility } from "@material-ui/icons";
import { fetchServiceData } from "../features/reducers/agencySlice2";
import AnalyticsCom from "../components/AnalyticsCom";

const Analytics = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);
  const categoriesData = useSelector((state) => state.categories.data);

  const columnsCompany = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Company Name", width: 150 },
    { field: "adminId", headerName: "agencies", width: 130 },
    { field: "gg", headerName: "ticket", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/displayOneCompany/" + params.row.id}>
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
  const columnsCategory = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Category Name", width: 150 },
    { field: "adminId", headerName: "N companies", width: 130 },
    { field: "gg", headerName: "ticket", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/displayOneCompany/" + params.row.id}>
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
    <div
      style={{
        height: 200,
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
      className="companyCat"
    >
      <AnalyticsCom />
      <div className="companyList">
        <div
          style={{
            height: 400,
            width: "95%",
            margin: "auto",
          }}
        >
          <h3 className="chartTitle">most active agencies this month</h3>

          <DataGrid
            getRowId={(r) => r.id}
            rows={categoriesData}
            columns={columnsCompany}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
          <br />
          <h3 className="chartTitle">most active services this month</h3>

          <DataGrid
            getRowId={(r) => r.id}
            rows={categoriesData}
            columns={columnsCategory}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
