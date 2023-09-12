import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Lazy Function */
import Lazy from '@utils/lazies/Lazy';

/* Components */
import Home from '@pages/homes/Home';

/* Route Setup */
import RouteProduct from "./RouteProduct";
import RouteUser from "./RouteUser";
export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home - Navbar + Footer */}
        <Route path="/" element={<Home></Home>}>
          <Route index element={Lazy(() => import("@components/Body/Body"))()}></Route>
          {/* <Route path="/pay" element={Lazy(() => import("../../src/components/Pay"))()} /> */}
          <Route path="cart/:id" element={Lazy(() => import("../../src/components/Body/Kit"))()} />
          <Route path="about" element={Lazy(() => import("@components/Test"))()}></Route>
          <Route path="infor" element={<>Thông Tin</>}></Route>
          {/* Products */}
          {RouteProduct}
        </Route>
        {/* Users */}
        {RouteUser}
      </Routes>
    </BrowserRouter>
  )
}
