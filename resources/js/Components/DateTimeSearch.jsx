import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input bg-blue px-2 py-1 mr-1 rounded text-white shadow" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  useEffect(() => {
    // Check if the start date is after the end date
    if (startDate > endDate) {
      setEndDate(startDate);
    }
    // Check if the end date is before the start date
    if (endDate < startDate) {
      setStartDate(endDate);
    }
  }, [startDate, endDate]);

  return (
    <div style={{ display: "flex" }}>
      <div className="datepicker">
        <label className="pr-1">Start: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
        />
      </div>
      <div className="datepicker">
        <label className="pr-1">End: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          customInput={<ExampleCustomInput />}
        />
      </div>
    </div>
  );
};

export default DateTimeSearch;
