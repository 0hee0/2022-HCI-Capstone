import React, { useEffect, useState } from 'react';
import { dateToString, getDays } from '../utils/format';
import { Box, Typography, Stack, Button } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


function Checklist() {
    const today = new Date();
    const days = getDays(today);
    const [flags, setFlags] = useState([true, false, true, false, false, false, false]);  // mockup data

    useEffect(() => {
        // TODO: API - GET flags
        // for day in days: 
        // send day.date and get flag
        // push flag to flags
    }, [])

    // const handleClick = (date) => (event) => {
    //     // TODO: API - POST day.date
    // }

    /* TEST */
    const handleClick = (index) => (event) => {
        let newFlags = [...flags];
        newFlags[index] = !flags[index];
        setFlags(newFlags);
    }

    return (
        <Stack py={3} spacing={1} justifyContent="center" alignItems="center">
            <Typography fontWeight="700">{dateToString(today)} (오늘)</Typography>
            <hr style={{ width: "100%", border: "1px solid #dddddd", margin: "1rem 0" }} />
            
            <Stack direction="row" spacing={4.5}>
                {days.map((day, index) =>
                    <Stack key={day.date} alignItems="center" spacing={2}>
                        <Box sx={{ backgroundColor: index===3 ? "#000" : "#fff", width: "1.5rem", borderRadius: "100%", display: "flex", justifyContent: "center" }}>
                            <Typography color={index===3 ? "#fff" : "#000"}>{day.day}</Typography>
                        </Box>
                        <Button onClick={handleClick(index)} color="secondary" sx={{ minWidth: "2.25rem", height: "2.25rem", borderRadius: "100%", padding: 0 }}>
                            {flags[index] === true ?
                                <Box sx={{ backgroundColor:  "accent.main", width: "2.25rem", height: "2.25rem", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <DirectionsRunIcon sx={{ color: "#000" }} />
                                </Box>
                            :
                                <Box sx={{ backgroundColor: "#DDDDDD", width: "2.25rem", height: "2.25rem", borderRadius: "100%" }} />
                            }
                        </Button>
                    </Stack>
                )} 
            </Stack>
        </Stack>
    )
}

export default Checklist
