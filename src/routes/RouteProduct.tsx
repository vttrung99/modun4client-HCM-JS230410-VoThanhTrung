import Lazy from "@/utils/lazies/Lazy";
import { Route } from "react-router-dom";

export default 
<Route path="/cart" element={Lazy(() => import("../../src/components/Body/Cart"))()}>

  <Route path=":id" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
</Route> 