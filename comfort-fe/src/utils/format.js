const dateToString = (source) => {
    try {
        const year = source.getFullYear();
        const month = source.getMonth() + 1;
        const day = source.getDate();

        const date = year + "년 " + month + "월 " + day + "일"

        return date;
    }
    catch {
        return source.slice(0, 10);
    }
}

export { dateToString }
