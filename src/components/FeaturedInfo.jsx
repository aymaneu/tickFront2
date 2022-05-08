import React, { useEffect } from "react";
import "../style/css/featuredInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { fetchCompaniesData } from "../features/reducers/companySlice";
import { fetchAgenciesData } from "../features/reducers/agencySlice";
import { fetchTicketData } from "../features/reducers/ticketSlice";

const FeaturedInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompaniesData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAgenciesData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTicketData());
  }, [dispatch]);

  const company = useSelector((state) => state.companies.data);
  const agency = useSelector((state) => state.agencies.data);
  const ticket = useSelector((state) => state.tickets.data);

  return (
    <div className="Featured">
      <div className="featuredItem">
        <span className="featuredTitle">agencies</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{company.length}</span>
          <span className="featuredSomeRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">services</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{agency.length}</span>
          <span className="featuredSomeRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">ticket</span>
        <div className="featuredStatueContainer">
          <span className="featuredSome">{ticket.length}</span>
          <span className="featuredSomeRate">
            +11.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
