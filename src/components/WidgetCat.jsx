import React, { useEffect } from "react";
import "../style/css/widgetCat.css";
import { Visibility } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryData } from "../features/reducers/categorySlice";
import { Link, useParams } from "react-router-dom";

const WidgetCat = () => {
  let { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);
  const categoriesData = useSelector((state) => state.categories.data);

  const looping = categoriesData.slice(0, 5).map((i) => {
    return i;
  });

  return (
    <div className="widgetCat">
      <span className="widgetCatTitle">categories</span>
      <ul className="widgetCatList">
        {looping.map((category) => {
          return (
            <li key={category.id} className="widgetCatListItem">
              <div className="widgetCatCom">
                <span className="widgetCatName">{category.name}</span>
              </div>
              <Link to={"/getAllCompaniesByCategory/" + category.id}>
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

export default WidgetCat;
