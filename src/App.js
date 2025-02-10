import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Login from './Components/LoginSignUp/Login';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import InterviewScheduler from './Components/InterviewSchedular/InterviewSchedular';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LoginSignUp />} />
        <Route path='/feedback' element={<FeedbackForm />} /> 
        <Route path="/interview" element={<InterviewScheduler />} />
      </Routes>
    </Router>
  );
}

export default App;
