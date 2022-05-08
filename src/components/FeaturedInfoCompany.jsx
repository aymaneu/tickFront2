import React, { useEffect } from "react";
import "../style/css/featuredInfoCompany.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { fetchServiceLengthData } from "../features/reducers/serviceLengthSlice";
import { fetchAgencyLengthData } from "../features/reducers/agencyLengthSlice";
import { fetchTicketLengthData } from "../features/reducers/ticketLengthSlice";

const FeaturedInfoCompany = () => {
  const dispatch = useDispatch();
  let { companyId } = useParams();
  useEffect(() => {
    dispatch(fetchServiceLengthData({ id: companyId }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAgencyLengthData({ id: companyId }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTicketLengthData({ id: companyId }));
  }, [dispatch]);

  const service = useSelector((state) => state.serviceFullLength.data);
  const agency = useSelector((state) => state.agencyFullLength.data);
  const ticket = useSelector((state) => state.ticketFullLength.data);

  return (
    <div className="Featured">
      <div className="featuredItem">
        <span className="featuredTitle">agencies</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{agency.agencyLength}</span>
          <span className="featuredSomeRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">tickets</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{ticket.ticketLength}</span>
          <span className="featuredSomeRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">services</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{service.serviceLength}</span>
          <span className="featuredSomeRate">
            +11.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfoCompany;
