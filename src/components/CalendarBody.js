const CalendarBody = (props) => {
    const now = props.now; //현재 날짜시각
    const nowDate = now.getDate(); //현재 날짜
    const nowMonth = now.getMonth() + 1; //현재 달
    const month = props.month;
    const calendar2022 = props.calendar2022;

    const thisMonth = props.month; //이번달, 9

    let startDayOfMonth = null; //시작요일
    let endDateOfMonth = 0; //이번달 일 수
    let numOfArr = null; //이번달 시작 인덱스

    const day = ["일", "월", "화", "수", "목", "금", "토"];

    for (let i = 0; i < calendar2022.length; i++) {
        if (calendar2022[i].월 === thisMonth) {
            endDateOfMonth++;
            if (calendar2022[i].일 === 1) {
                startDayOfMonth = day.indexOf(calendar2022[i].요일);
                numOfArr = i;
            }
        }
    }

    const rows = Math.ceil((startDayOfMonth + endDateOfMonth) / 7);

    const calendar = [];

    for (let week = 0; week < rows; week++) {
        let weekArr = [];

        for (
            let cell = numOfArr - startDayOfMonth + week * 7;
            cell < numOfArr - startDayOfMonth + week * 7 + 7;
            cell++
        ) {
            if (calendar2022[cell] === undefined) {
                weekArr.push(<div key={cell.toString()}></div>);
            } else {
                weekArr.push(
                    <div key={cell.toString()}>
                        <div
                            className={`day ${
                                nowDate === calendar2022[cell].일 &&
                                calendar2022[cell].월 === nowMonth &&
                                month === nowMonth
                                    ? "today"
                                    : ""
                            } ${
                                cell >= numOfArr && cell < numOfArr + endDateOfMonth
                                    ? ""
                                    : "notFocus"
                            } ${
                                calendar2022[cell].공휴일 !== null
                                    ? "publicHolyday"
                                    : ""
                            }`}
                        >
                            {calendar2022[cell].일 === 1
                                ? `${calendar2022[cell].월}월 ${calendar2022[cell].일}일`
                                : calendar2022[cell].일}
                        </div>

                        {calendar2022[cell].공휴일 !== null ? (
                            <div className="text publicHolyday">
                                {calendar2022[cell].공휴일}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                );
            }
        }

        calendar.push(
            <div key={week.toString()} className="container week">
                {weekArr}
            </div>
        );
    }
    return (
        <div>
            <div className="container days">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>
            <div className="calendar">{calendar}</div>
        </div>
    );
}

export default CalendarBody;