import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { SuccessPopupProvider } from "./providers";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Invoice = lazy(() => import("./pages/Invoice"));
const Edit = lazy(() => import("./pages/Edit"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const translationsPl = {
  bookkeeping: "Księgowość",
};
const translationsEn = {
  bookkeeping: "Bookkeeping",
};

i18next.use(initReactI18next).init({
  resources: {
    pl: { translation: translationsPl },
    en: { translation: translationsEn },
  },
  lng: "pl",
  fallbackLng: "pl",
});

function App() {
  return (
    <SuccessPopupProvider>
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
            path="/invoice/:id/edit"
            element={
              <Suspense fallback="Loading...">
                <Edit />
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
    </SuccessPopupProvider>
  );
}

export default App;
