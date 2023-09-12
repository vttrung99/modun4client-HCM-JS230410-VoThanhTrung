import Lazy from "@/utils/lazies/Lazy";
import { Route } from "react-router-dom";

export default 
<>
    <Route path="/register" element={Lazy(() => import("@pages/users/Register"))()} />
    <Route path="/login" element={Lazy(() => import("@pages/users/Login"))()} />
    <Route path="/admin" element={Lazy(() => import("@components/Admin"))()} />
    <Route path="/productss/:id" element={Lazy(() => import("../../src/components/Body/Kit"))()} />

</>
