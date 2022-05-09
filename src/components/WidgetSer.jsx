import React, { useEffect } from "react";
import "../style/css/widgetCat.css";
import { Visibility } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchServiceData } from "../features/reducers/agencySlice2";
import { Link, useParams } from "react-router-dom";

const WidgetSer = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceData({ id: 75 }));
  }, [dispatch]);
  const serviceData = useSelector((state) => state.services.data);

  const looping = serviceData.slice(0, 5).map((i) => {
    return i;
  });

  return (
    <div className="widgetCat">
      <span className="widgetCatTitle">services</span>
      <ul className="widgetCatList">
        {looping.map((service) => {
          return (
            <li key={service.id} className="widgetCatListItem">
              <div className="widgetCatCom">
                <span className="widgetCatName">{service.serviceName}</span>
              </div>
              <Link to={"/getAllCompaniesByCategory/" + service.id}>
                <button className="widgetCatButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSer;
