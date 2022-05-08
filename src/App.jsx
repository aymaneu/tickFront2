import Sidebar from "./components/shared/Sidebar";
import Topbar from "./components/shared/Topbar";
import Home from "./pages/Home";
import "./style/css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import CompanyCat from "./pages/CompanyCat";
import Analytics from "./pages/Analytics";
import EditCompany from "./pages/EditCompany";
import DisplayCompany from "./pages/DisplayCompany";
import CreateCompany from "./pages/CreateCompany";
import CompaniesAll from "./pages/CompaniesAll";
import CategoriesAll from "./pages/CategoriesAll";
import CreateCategory from "./pages/CreateCategory";
import EditCategory from "./pages/EditCategory";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="Rout">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/getAllCompaniesByCategory/:categoryId"
                element={<CompanyCat />}
              />
              <Route path="/getOneCompany/:id" element={<EditCompany />} />
              <Route
                path="/displayOneCompany/:companyId"
                element={<DisplayCompany />}
              />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/company" element={<CompaniesAll />} />
              <Route path="/category" element={<CategoriesAll />} />
              <Route path="/newCompany" element={<CreateCompany />} />
              <Route path="/newCategory" element={<CreateCategory />} />
              <Route path="/editCategory/:id" element={<EditCategory />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
