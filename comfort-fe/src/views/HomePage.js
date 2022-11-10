import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import NavBar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Calendar from '../components/Calendar';
import Checklist from '../components/Checklist';
import Diary from '../components/Diary';
import diaryIcon from '../assets/romantic-novel.png';


function HomePage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState("");

    const handleOpen = (event) => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setDraft(event.target.value);
    }

    const handleSubmit = (event) => {
        // TODO: POST draft
        setOpen(false);
    }

    return (
        <Box className={classes.container}>    
            <NavBar />
            <Grid container spacing={5} p={5}>
                <Grid item xs={7}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <ShadowBox height="24rem">
                                <Dashboard />
                            </ShadowBox>
                        </Grid>
                        <Grid item xs={8.5}>
                            <ShadowBox height="12rem">
                                <Checklist />
                            </ShadowBox>
                        </Grid>
                        <Grid item xs={3.5}>
                            <ShadowBox onClick={handleOpen} backgroundColor="primary.main" height="12rem" sx={{ display: "flex", justifyContent: "center", alignItems: "center", '&:hover': { cursor: "pointer" } }}>
                                <img src={diaryIcon} height="160px" />
                            </ShadowBox>
                        </Grid>
                        <Diary open={open} draft={draft} onClose={handleOpen} handleSubmit={handleSubmit} handleChange={handleChange} />
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <ShadowBox height="38.5rem">
                        <Calendar />
                    </ShadowBox>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.background.main,
        width: "100%",
        height: "100vh",
    }
}))

const ShadowBox = styled(Box)({
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    '-webkit-box-shadow': "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    borderRadius: "1rem"
})
