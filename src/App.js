import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = React.lazy(() => import("pages/HomePage"));
const JobsPage = React.lazy(() => import("pages/JobsPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
