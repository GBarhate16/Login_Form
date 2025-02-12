import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Dashboard/Footer";
import Navbar from "./Components/Dashboard/navbar";
import Home from "./Components/Dashboard/Home";
import Login from "./Components/LoginSignUp/Login";
import LoginSignUp from './Components/LoginSignUp/SignUP';
import Feedback from "./Components/FeedbackForm/FeedbackForm";
import Interview from "./Components/InterviewSchedular/InterviewSchedular";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
