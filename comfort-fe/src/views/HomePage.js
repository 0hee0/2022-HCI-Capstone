import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import NavBar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Calendar from '../components/Calendar';
import Checklist from '../components/Checklist';
import Diary from '../components/Diary';


function HomePage() {
    const classes = useStyles();

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
                            <ShadowBox height="12rem">
                                <Diary />
                            </ShadowBox>
                        </Grid>
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
        height: "calc(100vh)",
    }
}))

const ShadowBox = styled(Box)({
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    '-webkit-box-shadow': "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    borderRadius: "1rem"
})
