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
import ticketLengthReducer from "../reducers/ticketLengthSlice";
import serviceLengthReducer from "../reducers/serviceLengthSlice";

const store = configureStore({
  reducer: {
    oneCompany: oneCompanyReducer,
    companies: companyReducer,
    companyDate: companyDateReducer,
    companiesCategory: companyCategoryReducer,
    companiesChart: companyChartReducer,
    agencies: agencyReducer,
    agencyFullLength: agencyLengthReducer,
    tickets: ticketReducer,
    ticketFullLength: ticketLengthReducer,
    categories: categoryReducer,
    serviceFullLength: serviceLengthReducer,
  },
});

export default store;
