import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Invoice from "./pages/Invoice";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
