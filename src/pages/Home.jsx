import React from "react";
import Chart from "../components/Chart";
import "./../style/css/home.css";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetSer from "../components/WidgetSer";
import "./../style/css/home.css";
import WidgetCom from "../components/WidgetCom";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSer />
        <WidgetCom />
      </div>
    </div>
  );
};

export default Home;
