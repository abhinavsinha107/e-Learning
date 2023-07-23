import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import PrivateRoutesLayout from "./layouts/PrivateRoutesLayout";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<Error />} />

        {/* PRIVATE PAGES */}
        <Route element={<PrivateRoutesLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
