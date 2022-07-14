import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyCreate = React.lazy(() => import("./pages/Create"));
const LazyInvoice = React.lazy(() => import("./pages/Invoice"));
const LazyPageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/create"
          element={
            <React.Suspense fallback="Loading...">
              <LazyCreate />
            </React.Suspense>
          }
        />
        <Route
          path="/invoice/:id"
          element={
            <React.Suspense fallback="Loading...">
              <LazyInvoice />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback="Loading...">
              <LazyPageNotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
