import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Stack } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { dateToString } from '../utils/format';
import moment from 'moment';
import 'moment/locale/ko';


function MonthlyCalendar({ diary, activity, getSavedDraft }) {
    const classes = useStyles();
    const [date, onChange] = useState(new Date());

    useEffect(() => {
        // TODO: API
    }, [])

    return (
        <Box width="100%">
            <Calendar 
                className={`${classes.calendar}`}
                onChange={onChange} 
                value={date} 
                formatDay={(locale, date) => moment(date).format("DD")}
                showNeighboringMonth={false}        // 이전, 이후 달의 날짜는 보이지 않도록 설정
                tileContent={({ date, view }) => {  // 날짜 타일에 컨텐츠 추가하기 (html 태그)
                    // 추가할 html 태그를 변수 초기화
                    let html = [];
                    html.push(<div className={classes.smallDot}></div>);
                    // 현재 날짜가 날짜 배열에 있다면, dot div 추가
                    if (diary.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                        html.push(<div className={`${classes.smallDot} ${classes.diary}`}></div>);
                    }
                    if (activity.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                        html.push(<div className={`${classes.smallDot} ${classes.activity}`}></div>);
                    }
                    html.push(<div className={classes.smallDot}></div>);
                    return (
                      <>
                        <Stack direction="row" spacing={1} justifyContent="center" pt={1}>
                            {html}
                        </Stack>
                      </>
                    );
                  }}
            />
            <hr style={{ width: "100%", border: "1px solid #dddddd", margin: "1rem 0" }} />
            <Stack py={3} px={4} spacing={3}>
                {diary.find((x) => x === moment(date).format("YYYY-MM-DD")) ? (
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Box className={`${classes.mediumDot} ${classes.diary}`} />
                        <Typography onClick={getSavedDraft(dateToString(date, "-"))} sx={{ '&:hover': { cursor: "pointer" } }}>{dateToString(date)}에 작성한 일기</Typography>
                    </Stack>
                ) : null}
                {activity.find((x) => x === moment(date).format("YYYY-MM-DD")) ? (
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Box className={`${classes.mediumDot} ${classes.activity}`} />
                        <Typography>운동을 했어요 💗</Typography>
                    </Stack>
                ) : null}
            </Stack>
        </Box>
    )
}

export default MonthlyCalendar

const useStyles = makeStyles(theme => ({
    calendar: {
        width: "100%",
        height: "100%",
        border: "none",
        padding: "0.5rem 1rem",
        '& .react-calendar__navigation__label > span': {
            fontSize: "1rem",
            fontWeight: 700,
        },
        '& .react-calendar__tile': {
            backgroundColor: "#FFF",
            color: "#000",
            borderRadius: "20%"
        },
        '& .react-calendar__tile--now': {
            backgroundColor: "#DDDDDD",
            color: "#000",
            borderRadius: "20%"
        },
        
        '& .react-calendar__tile:enabled:hover': {
            backgroundColor: "#F4F4F4",
            color: "#000",
            borderRadius: "20%"
        },
        '& .react-calendar__tile:enabled:focus': {
            backgroundColor: "pink",
            color: "#000",
            borderRadius: "20%"
        },
        '& .react-calendar__tile--active': {
            backgroundColor: "#DDDDDD",
            color: "#000",
            borderRadius: "20%"
        }
    },
    smallDot: {
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        display: "flex",
        margin: "0.5rem 0"
    },
    mediumDot: {
        height: "16px",
        width: "16px",
        borderRadius: "50%",
    },
    activity: {
        backgroundColor: theme.palette.accent.main,
    },
    diary: {
        backgroundColor: theme.palette.primary.main,
    },
}))
