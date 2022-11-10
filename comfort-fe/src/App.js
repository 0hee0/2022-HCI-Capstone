import React, { Suspense } from 'react';

import NavBar from './components/Navbar';
import HomePage from "./views/HomePage";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./font.module.css";
import { theme } from './theme.js';


function App() {
    const customTheme = createTheme(theme);

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Suspense fallback={(<div>Loading...</div>)}>
                <NavBar />
                <HomePage />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
