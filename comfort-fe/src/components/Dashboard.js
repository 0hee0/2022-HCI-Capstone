import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import { Box, Typography, Stack, Select, MenuItem } from '@mui/material';
import { theme } from '../theme';
import { getDays } from '../utils/format';


function Dashboard() {
    const today = new Date();
    const days = getDays(today, "end").map(days => days.day);
    const options = {
        colors: [theme.palette.primary.main],
        dataLabels: {
            enabled: false
        },
    }
    const [chart, setChart] = useState({});
    const [category, setCategory] = useState("week");
    const [seriesName, setSeriesName] = useState();
    const [chartType, setChartType] = useState();

    useEffect(() => {
        // TODO: GET data
        if (category === "week") {
            let additionalOptions = {
                xaxis: {
                    categories: days
                }
            }
            setSeriesName("우울감을 느낀 빈도수");
            setChartType("area");
            setChart({
                series: [{
                    name: "우울감을 느낀 빈도수",
                    data: [2, 4, 8, 6, 5, 1, 0] // mockup data
                }],
                options: Object.assign(options, additionalOptions)
            });
        }
        else if (category === "day") {
            let additionalOptions = {
                xaxis: {
                    categories: ["기상", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "취침"],
                    // type: "datetime",
                    // categories: ["2022-11-15T90:00:00.000Z", "2022-11-15T12:00:00.000Z", "2022-11-15T15:00:00.000Z", "2022-11-15T18:00:00.000Z", "2022-11-15T21:00:00.000Z", "2022-11-15T23:00:00.000Z"]
                },
                tooltip: {
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                        let text = "";
                        Boolean(series[seriesIndex][dataPointIndex]) ? text = "우울감을 느꼈어요 😢" : text = "우울감을 느끼지 않았어요 💗"
                        return '<div>' + text + '</div>'
                    }
                }
            }
            setSeriesName("우울감을 느낀 시간");
            setChartType("bar")
            setChart({
                series: [{
                    name: "우울감을 느낀 시간",
                    data: [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1] // mockup data
                }],
                options: Object.assign(options, additionalOptions)
            });
        }
    }, [category]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <Box pt={2} pr={1} pb={6} height="100%">
            <Stack direction="row" alignItems="center" justifyContent="space-between" pl={2} pb={1}>
                <Typography fontWeight="700">{seriesName}</Typography>
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
                <Chart options={chart.options} series={chart.series} type={chartType} height={"100%"} />
            ) : null}
        </Box>
    )
}

export default Dashboard
