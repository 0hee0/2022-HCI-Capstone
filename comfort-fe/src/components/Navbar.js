import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import logo from "../assets/heart-attack.png";


function Navbar() {
    const [username, setUsername] = useState("Hee");    // mockup data

    return (
        <Box px={5} py={2} sx={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <a href="/" style={{ margin: 0, padding: 0, lineHeight: "11px" }}>
                    <img src={logo} width="50" />
                </a>
                <Box backgroundColor="primary.main" py={0.75} px={2.5} borderRadius={"12px"}>
                    <Typography color="white" fontFamily="Roboto Mono">{username}</Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Navbar
