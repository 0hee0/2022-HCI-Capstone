import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import { Box, Typography, Stack, Select, MenuItem } from '@mui/material';
import { theme } from '../theme';
import { getDays } from '../utils/format';


function Dashboard() {
    const today = new Date();
    const days = getDays(today, "end").map(days => days.day);
    const seriesName = "우울감을 느낀 빈도수";
    const options = {
        colors: [theme.palette.primary.main],
        chart: {
            type: "area",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth"
        },
        // xaxis: {
        //     type: "datetime",
        //     categories: ["2022-11-15T90:00:00.000Z", "2022-11-15T12:00:00.000Z", "2022-11-15T15:00:00.000Z", "2022-11-15T18:00:00.000Z", "2022-11-15T21:00:00.000Z", "2022-11-15T23:00:00.000Z"]
        // },
        // tooltip: {
        //     x: {
        //         format: "dd/MM/yy HH:mm"
        //     }
        // }
    }
    const [category, setCategory] = useState("week");
    const [chart, setChart] = useState({});

    useEffect(() => {
        // TODO: GET data
        if (category === "week") {
            let xaxis = {
                xaxis: {
                    categories: days
                }
            }
            setChart({
                series: [{
                    name: seriesName,
                    data: [8, 16, 20, 12, 21, 5, 0] // mockup data
                }],
                options: Object.assign(options, xaxis)
            });
        }
        else if (category === "day") {
            let xaxis = {
                xaxis: {
                    categories: ["기상", "12:00", "15:00", "18:00", "21:00", "취침"],
                }
            }
            setChart({
                series: [{
                    name: seriesName,
                    data: [0, 2, 4, 3, 6, 3] // mockup data
                }],
                options: Object.assign(options, xaxis)
            });
        }
    }, [category]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <Box pt={2} pr={1} pb={6} height="100%">
            <Stack direction="row" alignItems="center" justifyContent="space-between" pl={2} pb={1}>
                <Typography fontWeight="700">우울감을 느낀 빈도수</Typography>
                <Select
                    variant="standard"
                    disableUnderline
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value={"week"}>1주</MenuItem>
                    <MenuItem value={"day"}>1일</MenuItem>
                </Select>
            </Stack>
            {chart && chart.options && chart.series ? (
                <Chart options={chart.options} series={chart.series} type="area" height={"100%"} />
            ) : null}
        </Box>
    )
}

export default Dashboard
