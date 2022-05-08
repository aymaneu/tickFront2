//react
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//components
import ChartCompanies from "../components/ChartCompanies";
import FeaturedInfoCompany from "../components/featuredInfoCompany";
//slices
import { fetchOneCompanyData } from "../features/reducers/oneCompanySlice";
import { fetchOneCompanyDateData } from "../features/reducers/companyDateSlice";
//style
import "../style/css/displayCompany.css";

const DisplayCompany = () => {
  let { companyId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneCompanyData({ id: companyId }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchOneCompanyDateData({ id: companyId }));
  }, [dispatch]);
  const company = useSelector((state) => state.oneCompany.data);
  const companyDate = useSelector((state) => state.companyDate.data);
  const looping = company.slice(0, 1).map((i) => {
    return i;
  });
  return (
    <div className="company1">
      {looping.map((com) => {
        return (
          <div key={com.id}>
            <img
              className="image_company"
              src="https://i.pinimg.com/564x/ec/33/7c/ec337c9d3914249f27d25a3b6636b456.jpg"
              alt="gg"
            />

            <div className="description_company">
              <div className="description_company_small">
                <h4>Company Name :</h4>
                <h5>{com.companyName}</h5>
              </div>
              <div className="description_company_small">
                <h4>Phone Number :</h4>
                <h5>{com.phoneNumber}</h5>
              </div>
              <div className="description_company_small">
                <h4>Address :</h4>
                <h5>{com.address}</h5>
              </div>
              <div className="description_company_small">
                <h4>Email :</h4>
                <h5>{com.email}</h5>
              </div>
              <div className="description_company_small">
                <h4>category :</h4>
                <h5>{com.name}</h5>
              </div>
              <div className="description_company_small">
                <h4>RC ICE :</h4>
                <h5>{com.rc_ice}</h5>
              </div>
              <div className="description_company_small">
                <h4>type :</h4>
                <h5>{com.type}</h5>
              </div>
              <div className="description_company_small">
                <h4>creation date :</h4>
                <h5>{companyDate}</h5>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <FeaturedInfoCompany />
        <ChartCompanies />
      </div>
    </div>
  );
};

export default DisplayCompany;
