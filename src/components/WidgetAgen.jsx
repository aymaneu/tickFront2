import React, { useEffect } from "react";
import "../style/css/widgetCom.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesData } from "../features/reducers/companySlice";

const WidgetAgen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesData());
  }, [dispatch]);
  const companySome = useSelector((state) => state.companies.data);

  const Button = ({ type }) => {
    return <button className={"widgetComButton " + type}>{type}</button>;
  };
  const looping = companySome.slice(0, 5).map((i) => {
    return i;
  });
  const condition = companySome.length !== 0;

  return (
    <div className="widgetCom">
      <h3 className="widgetComTitle">latest agencies update</h3>
      <table className="widgetComTable">
        <tbody>
          <tr className="widgetComTr">
            <th className="widgetComTh">agency Name</th>
            <th className="widgetComTh">Date</th>
            <th className="widgetComTh">Status</th>
          </tr>
          {condition ? (
            looping.map((comp) => {
              return (
                <tr key={comp.id} className="widgetComTr">
                  <td className="widgetComCategory">
                    <img src={comp.avatar} alt="" className="widgetComImg" />
                    <span className="widgetComName">{comp.email}</span>
                  </td>
                  <td className="widgetComDate">{comp.creationDate}</td>

                  <td className="widgetComStatus">
                    <Button type={comp.status} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="widgetComTr">
              <td className="widgetComCategory">
                <img src="" className="widgetComImg" />
                <span className="widgetComName">no email</span>
              </td>
              <td className="widgetComDate">no date</td>
              <td className="widgetComAmount">no category</td>
              <td className="widgetComStatus">
                <Button type="nono" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetAgen;
