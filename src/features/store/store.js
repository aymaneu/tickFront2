import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companySlice";
import agencyReducer from "../reducers/agencySlice";
import companyDateReducer from "../reducers/companyDateSlice";
import ticketReducer from "../reducers/ticketSlice";
import companyChartReducer from "../reducers/companyChartSlice";
import categoryReducer from "../reducers/categorySlice";
import companyCategoryReducer from "../reducers/companyCaSlice";
import oneCompanyReducer from "../reducers/oneCompanySlice";
import agencyLengthReducer from "../reducers/agencyLengthSlice";
import agencyLengthReducer2 from "../reducers/agencyLengthSlice2";
import ticketLengthReducer2 from "../reducers/ticketLengthSlice2";
import ticketLengthReducer from "../reducers/ticketLengthSlice";
import serviceLengthReducer from "../reducers/serviceLengthSlice";
import companyLengthReducer from "../reducers/companyLengthSlice";
import agencyChartReducer from "../reducers/agencyChartSlice";

const store = configureStore({
  reducer: {
    oneCompany: oneCompanyReducer,
    companies: companyReducer,
    companyDate: companyDateReducer,
    companiesCategory: companyCategoryReducer,
    companiesChart: companyChartReducer,
    agenciesChart: agencyChartReducer,
    agencies: agencyReducer,
    agencyFullLength: agencyLengthReducer,
    companyFullLength: companyLengthReducer,
    agencyFullLength2: agencyLengthReducer2,
    ticketFullLength2: ticketLengthReducer2,
    tickets: ticketReducer,
    ticketFullLength: ticketLengthReducer,
    categories: categoryReducer,
    serviceFullLength: serviceLengthReducer,
  },
});

export default store;
