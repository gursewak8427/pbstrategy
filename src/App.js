import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./utils/routes";
import { MainLayout } from "./layouts/MainLayout";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="">
      <MainLayout>
        <Routes>
          {AppRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {/* Write more routes */}
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
