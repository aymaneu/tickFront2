import React from "react";
import Chart from "../components/Chart";
import "./../style/css/home.css";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetCat from "../components/WidgetCat";
import "./../style/css/home.css";
import WidgetCom from "../components/WidgetCom";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetCat />
        <WidgetCom />
      </div>
    </div>
  );
};

export default Home;
