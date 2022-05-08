import React, { useEffect } from "react";
import "../style/css/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchCompaniesChartData } from "../features/reducers/companyChartSlice";
import { useSelector, useDispatch } from "react-redux";

const ChartCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompaniesChartData());
  }, [dispatch]);
  const companiesFlow = useSelector((state) => state.companiesChart.data);

  return (
    <div className="chart">
      <h3 className="chartTitle">new companies per month</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={companiesFlow}>
          <XAxis interval="preserveStartEnd" dataKey="month" stroke="#5550bd" />
          <Line type="monotone" dataKey="value" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCompanies;
