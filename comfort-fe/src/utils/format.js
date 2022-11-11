function leftPad(value) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

const dateToString = (source, delimeter) => {
    try {
        const year = source.getFullYear();
        let month;
        let day;
        let date;
        if (delimeter) {
            month = leftPad(source.getMonth() + 1);
            day = leftPad(source.getDate());
            date = year + delimeter + month + delimeter + day;
        }
        else {
            month = source.getMonth() + 1;
            day = source.getDate();
            date = year + "년 " + month + "월 " + day + "일"
        }
        return date;
    }
    catch {
        return source.slice(0, 10);
    }
}

const getDayOfDate = (source) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];

    const day = days[source.getDay()];
    return day;
}

const getDays = (source) => {
    const today = source;
    const currentDay = getDayOfDate(source);

    const sevenDays = [];
    const idx = [-3, -2, -1, 0, 1, 2, 3];
    const days = ["일", "월", "화", "수", "목", "금", "토"];

    let step;
    let day;
    let date = new Date();
    for (step = 0; step < 7; step++) {
        day = days[(days.indexOf(currentDay) + idx[step] + 7) % 7];
        date.setDate(today.getDate() + idx[step]);
        sevenDays.push({ "date": dateToString(date, "-"), "day": day });
    }

    return sevenDays;
}

export { dateToString, getDayOfDate, getDays }
