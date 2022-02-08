import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  align-items: center; /* Default */
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledLi = styled.li`
  display: block;
  list-style-type: none;
  background: #fafafa;
  outline: 2px solid black;
  padding: 1em;
`;

const updateDays = (days, day) => {
  const a = new Set([...days]);
  //todo figure out why this is needed
  //eslint-disable-next-line
  a.has(day) ? a.delete(day) : a.add(day);
  return a;
};

const Days = ({ update, days }) => {
  return (
    <StyledUl>
      <StyledLi onClick={() => update(updateDays(days, "Monday"))}>
        Monday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Tuesday"))}>
        Tuesday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Wednesday"))}>
        Wednesday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Thursday"))}>
        Thursday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Friday"))}>
        Friday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Saturday"))}>
        Saturday
      </StyledLi>
      <StyledLi onClick={() => update(updateDays(days, "Sunday"))}>
        Sunday
      </StyledLi>
    </StyledUl>
  );
};

const convertTime = (timeIn2400) => {
  let timeArray = timeIn2400.split("");
  timeArray.splice(2, 0, ":");
  return timeArray.join("");
};

const Time = ({ update, time: { start, stop } }) => {
  return (
    <>
      <input
        type="time"
        name="Start"
        defaultValue={convertTime(start)}
        value={""}
        onChange={() => update()}
      ></input>
      <input
        type="time"
        name="Stop"
        defaultValue={convertTime(stop)}
        onChange={() => update()}
      ></input>
    </>
  );
};

const SettingsPanel = () => {
  const [days, setDays] = useState(new Set<String>());
  const [time, setTime] = useState({ start: "0000", stop: "2359" });

  return (
    <form>
      <Days update={setDays} days={days} />
      <Time update={setTime} time={time} />
      <input type="submit" value="Submit" />
    </form>
  );
};

function App() {
  return <SettingsPanel />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
