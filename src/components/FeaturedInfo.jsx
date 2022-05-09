import React, { useEffect } from "react";
import "../style/css/featuredInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesLengthData } from "../features/reducers/companyLengthSlice";
import { fetchAgencyLengthData } from "../features/reducers/agencyLengthSlice";
import { fetchTicketLengthData2 } from "../features/reducers/ticketLengthSlice2";
import { fetchTicketLengthData } from "../features/reducers/ticketLengthSlice";
import { fetchServiceLengthData } from "../features/reducers/serviceLengthSlice";

const FeaturedInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceLengthData({ id: 75 }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAgencyLengthData({ id: 75 }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTicketLengthData({ id: 75 }));
  }, [dispatch]);

  const service = useSelector(
    (state) => state.serviceFullLength.data.serviceLength
  );

  const agency = useSelector(
    (state) => state.agencyFullLength.data.agencyLength
  );
  const ticket = useSelector(
    (state) => state.ticketFullLength.data.ticketLength
  );

  return (
    <div className="Featured">
      <div className="featuredItem">
        <span className="featuredTitle">agencies</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{agency}</span>
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
          <span className="featuredSome">{service}</span>
        </div>
        <span className="featuredSub">total services</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
