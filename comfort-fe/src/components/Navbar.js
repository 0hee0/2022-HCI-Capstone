import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from "../assets/heart-attack.png";


function Navbar() {
    const classes = useStyles();
    const [username, setUsername] = useState("Hee");    // mockup data

    return (
        <Box className={classes.navbar}>
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

const useStyles = makeStyles({
    navbar: {
        padding: "1rem 2.5rem",
        backgroundColor: "#fff",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    }
})
