import React, { useState, useEffect } from 'react'

import './App.css';

import { Box } from '@mui/material';

import MainPage from './pages/index';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(null);
  
  const screenBreakPoint = 830;
  
  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);
  
  useEffect(() => {
    if (screenWidth < screenBreakPoint) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }, [screenWidth]);

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainPage mobileView={mobileView} />
    </Box>
  );
}

export default App;
