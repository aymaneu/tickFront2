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
import { fetchAgenciesChartData } from "../features/reducers/agencyChartSlice";

const Chart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAgenciesChartData({ id: 75 }));
  }, [dispatch]);
  const agenciesFlow = useSelector((state) => state.agenciesChart.data);

  return (
    <div className="chart">
      <h3 className="chartTitle">new agencies per month</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={agenciesFlow}>
          <XAxis interval="preserveStartEnd" dataKey="month" stroke="#5550bd" />
          <Line type="monotone" dataKey="value" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
