import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar/NavBar";
import ProductsList from "../pages/ProductsList";

const Routing = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/product-list" element={<ProductsList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
