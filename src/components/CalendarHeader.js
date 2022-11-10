const CalendarHeader = (props) => {
  const month = props.month;
  const prevMonth = props.prevMonth;
  const resetMonth = props.resetMonth;
  const nextMonth = props.nextMonth;

  return (
    <div>
      <div className="container header">
        <div>{`2022년 ${month}월`}</div>
        <div className="empty"></div>
        <div className="btn" onClick={prevMonth}>
          &lt;
        </div>
        <div className="btn" onClick={resetMonth}>
          오늘
        </div>
        <div className="btn" onClick={nextMonth}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
