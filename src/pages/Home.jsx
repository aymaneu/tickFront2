import React from "react";
import Chart from "../components/Chart";
import "./../style/css/home.css";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetSer from "../components/WidgetSer";
import "./../style/css/home.css";
import WidgetAgen from "../components/WidgetAgen";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSer />
        <WidgetAgen />
      </div>
    </div>
  );
};

export default Home;
