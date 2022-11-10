const CalendarBody = (props) => {
  const now = props.now; //오늘 날짜시각
  const nowDate = now.getDate(); //오늘 일
  const nowMonth = now.getMonth() + 1; //오늘 달

  const month = props.month;
  const thisMonth = props.month;

  const calendar2022 = props.calendar2022;

  let startDayOfMonth = null; //시작요일
  let endDateOfMonth = 0; //선택 월의 일 수
  let numOfArr = null; //선택 월의 시작 인덱스

  const day = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < calendar2022.length; i++) {
    //선택 월의 일 수, 1일의 요일, 인덱스 찾기
    if (calendar2022[i].월 === thisMonth) {
      endDateOfMonth++;
      if (calendar2022[i].일 === 1) {
        startDayOfMonth = day.indexOf(calendar2022[i].요일);
        numOfArr = i;
      }
    }
  }

  const rows = Math.ceil((startDayOfMonth + endDateOfMonth) / 7); //선택 월의 행 수

  const calendar = []; //화면에 나타낼 날짜 배열 선언

  for (let week = 0; week < rows; week++) {
    //행의 수 만큼 반복하여 weekArr를 calendar에 push
    let weekArr = [];

    for (
      //한 주를 weekArr에 push
      let cell = numOfArr - startDayOfMonth + week * 7;
      cell < numOfArr - startDayOfMonth + week * 7 + 7;
      cell++
    ) {
      if (calendar2022[cell] === undefined) {
        //날짜 정보 없으면 빈 칸
        weekArr.push(<div key={cell.toString()}></div>);
      } else {
        weekArr.push(
          <div key={cell.toString()}>
            <div
              className={`day ${
                //오늘
                nowDate === calendar2022[cell].일 &&
                calendar2022[cell].월 === nowMonth &&
                month === nowMonth
                  ? "today"
                  : ""
              } ${
                //지난 달과 다음 달
                cell >= numOfArr && cell < numOfArr + endDateOfMonth
                  ? ""
                  : "notFocus"
              }`}
            >
              {calendar2022[cell].일 === 1 //1일이면 월과 일 표시
                ? `${calendar2022[cell].월}월 ${calendar2022[cell].일}일`
                : calendar2022[cell].일}
            </div>

            {calendar2022[cell].공휴일 !== null ? ( //공휴일 표시
              <div className="publicHoliday">{calendar2022[cell].공휴일}</div>
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
};

export default CalendarBody;
