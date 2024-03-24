import React, { useState } from "react";
import dateFormat from "dateformat";
import moment from "moment";
const TimeDate = () => {
  const [dates, setDates] = useState();
  const [times,setTimes]=useState()

  const newDate = () => {
    // setDate(date : new Date().toLocaleString(),)
    const currentDate = dateFormat(new Date(), "dS mmmm,yyyy");
    const currentTime = moment(new Date()).format("h:mm a");
    setDates(currentDate)
    setTimes(currentTime)
    console.log(currentDate);
    console.log(currentTime);
  };
  return (
    <>
      <h2>To day date is: {dates}</h2>
      <h2>To times is: {times}</h2>
      <input type="date" />
      <button onClick={newDate}>Submit</button>
    </>
  );
};

export default TimeDate;
