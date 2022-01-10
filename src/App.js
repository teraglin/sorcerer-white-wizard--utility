import './App.css';

import { Box } from '@mui/material';

import MainPage from './pages/index';

function App() {
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
      <MainPage />
    </Box>
  );
}

export default App;
