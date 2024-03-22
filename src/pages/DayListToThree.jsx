import React from "react";
import DayToThree from "../components/DayToThree";

export default function DayListToThree({ datas }) {
  return (
    <div>
      <h2>하루 3등분 Planning</h2>
      <ol>
        {datas.map((data) => (
          <li key={data.date}>
            <DayToThree data={data} />
          </li>
        ))}
      </ol>
    </div>
  );
}
