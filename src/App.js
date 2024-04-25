import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import TopicPage from './pages/TopicPage';
import './App.css'; // Tailwind CSS import
import SubTopic from './components/SubTopic';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path='/:topicId' element={<TopicPage/>}/> */}

        <Route path='/topic/subTopic' element={<SubTopic/>}/> 
         <Route path="/topic/:topicId" element={<TopicPage />} />
         <Route path='/Login' element={<LoginPage />} /> 
         <Route path='/Signup' element={<SignupPage/>}/>
          {/* ... other routes */}
      
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;