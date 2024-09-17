import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { CreateCompatibleModel } from "../pages/create-compatible-model";
import { LayoutDefault } from "../layout/layout-default";
import { ListCompatibleModel } from "../pages/list-compatible-model";
import { SignIn } from "../pages/sign-in";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route
          path="compatible-models/:id"
          element={<CreateCompatibleModel />}
        />
        <Route
          path="list-compatible-models/:id"
          element={<ListCompatibleModel />}
        />

        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}
