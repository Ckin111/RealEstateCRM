import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage, NotFoundPage } from "../pages";
import { AppLayout } from "../layouts";

export const NavigationProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to={"/home"} />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
