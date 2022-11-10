import React, { Suspense } from 'react';

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
                
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
