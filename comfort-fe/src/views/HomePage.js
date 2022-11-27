import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import NavBar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import MonthlyCalendar from '../components/MonthlyCalendar';
import Checklist from '../components/Checklist';
import Diary from '../components/Diary';
import diaryIcon from '../assets/romantic-novel.png';
import moment from 'moment';
import 'moment/locale/ko';


function HomePage() {
    const classes = useStyles();
    const today = new Date();
    /* Diary */
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState("");
    const [todayDiary, setTodayDiary] = useState("");   // TEST
    /* Monthly Calendar */
    // GET diary 
    const [diary, setDiary] = useState(["2022-11-01", "2022-11-03", "2022-11-12", "2022-11-20", "2022-11-23", "2022-11-25"]);   // mockup data
    // GET activity
    const [activity, setActivity] = useState(["2022-11-12", "2022-11-14", "2022-11-25", "2022-11-26"]);              // mockup data
    /* Checklist */
    const [flags, setFlags] = useState([true, false, true, false, false, false, false]);  // mockup data

    /* Diary */
    const handleOpen = (event) => {
        setOpen(!open);
        setDraft("");
    }
    const handleChange = (event) => {
        setDraft(event.target.value);
    }
    const handleSubmit = (event) => {
        // TODO: POST draft
        if (draft) {
            let newDiary = [...diary];
            newDiary.push(moment(today).format("YYYY-MM-DD"));
            setDiary(newDiary);
            setTodayDiary(draft);
        }
        handleOpen();
    }

    /* Monthly Calendar */
    const getSavedDraft = (date) => (event) => {
        setOpen(true);
        // TODO: GET draft by date
        if (todayDiary && date===moment(today).format("YYYY-MM-DD")) {   // TEST
            setDraft(todayDiary);
        }
        else {
            setDraft("작성했던 일기입니다!");
        }
    }

    /* TEST - Checklist */
    const handleClick = (index) => (event) => {
        let newFlags = [...flags];
        newFlags[index] = !flags[index];
        setFlags(newFlags);

        let newActivity = [...activity];
        newActivity.push(moment(today).format("YYYY-MM-DD"));
        setActivity(newActivity);
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
                                <Checklist flags={flags} handleClick={handleClick} />
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
                        <MonthlyCalendar diary={diary} activity={activity} getSavedDraft={getSavedDraft} />
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
        overflow: "hidden"
    }
}))

const ShadowBox = styled(Box)({
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    '-webkit-box-shadow': "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    borderRadius: "1rem"
})
