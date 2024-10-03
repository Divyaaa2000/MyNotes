import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/Main/Main";
import AboutPage from './components/About/AboutPage'; 
import MyNotes from './components/MyNotes/MyNotes';
import './App.css';

const App = () => {
  //const mainContentRef = useRef(null); // Reference created

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={
          <>
            {/* Render MainContent with different text */}
            <MainContent  title="What will you achieve today?" content="Remember everything and tackle any project with your notes, tasks, and schedule all in one place." />
            <MainContent title="24/7 access" content="No WiFi? No problem—offline mode means you can continue to use MyNote even when the internet cuts out." />
          </>
        } />
        <Route path="/CreateNote" element={<MyNotes/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
