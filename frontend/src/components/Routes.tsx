import HomePage from "@/pages/HomePage";
import { Route, Routes as ReactRoutes } from "react-router";
import Layout from "./Layout";

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </ReactRoutes>
  );
}

export default Routes;
