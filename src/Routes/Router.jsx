import { Route, Routes } from "react-router";
import Layout from "../Layout";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
