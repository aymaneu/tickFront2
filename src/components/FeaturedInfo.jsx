import React, { useEffect } from "react";
import "../style/css/featuredInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesLengthData } from "../features/reducers/companyLengthSlice";
import { fetchAgencyLengthData } from "../features/reducers/agencyLengthSlice2";
import { fetchTicketLengthData2 } from "../features/reducers/ticketLengthSlice2";

const FeaturedInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesLengthData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAgencyLengthData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTicketLengthData2());
  }, [dispatch]);

  const company = useSelector(
    (state) => state.companyFullLength.data.companyLength
  );
  const agency = useSelector(
    (state) => state.agencyFullLength2.data.agencyLength
  );
  const ticket = useSelector(
    (state) => state.ticketFullLength2.data.ticketLength
  );

  return (
    <div className="Featured">
      <div className="featuredItem">
        <span className="featuredTitle">agencies</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{company}</span>
        </div>
        <span className="featuredSub">total agencies</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">tickets</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{agency}</span>
        </div>
        <span className="featuredSub">total tickets</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">services</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{ticket}</span>
        </div>
        <span className="featuredSub">total services</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
