import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "react-date-range/dist/styles.css"; // main css file
import "./variables.css"; // variables
import { Toaster } from "react-hot-toast";

const Booking = lazy(() => import("./pages/Booking"));
const AddBooking = lazy(() => import("./pages/AddBooking"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Booking />} />
            <Route exact path="/add" element={<AddBooking />} />
          </Routes>
          <Toaster position="top-center" reverseOrder={false} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
