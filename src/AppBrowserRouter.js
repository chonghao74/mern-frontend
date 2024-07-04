import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppBrowserRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="OnePage" element={<OnePage />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppBrowserRouter;
