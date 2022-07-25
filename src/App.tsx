import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Invoice = lazy(() => import("./pages/Invoice"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/create"
          element={
            <Suspense fallback="Loading...">
              <Create />
            </Suspense>
          }
        />
        <Route
          path="/invoice/:id"
          element={
            <Suspense fallback="Loading...">
              <Invoice />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback="Loading...">
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
