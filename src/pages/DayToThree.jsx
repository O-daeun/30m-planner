import React from "react";

export default function DayToThree({ datas }) {
  const data = datas[0];
  return (
    <div>
      <h2>하루 3등분 Planning</h2>
      <h3>{data && data.date}</h3>
      <table>
        <thead>
          <tr>
            <th>하루 3등분</th>
            <th>일정계획</th>
            <th>일정메모</th>
            <th>실제</th>
            <th>평가</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>06:00 ~ 12:00</th>
            <td>
              <input type='checkbox' />
              {data && data.plan[0]}
            </td>
            <td>
              <input type='checkbox' />
              {data && data.memo[0]}
            </td>
            <td></td>
            <td>{data && data.review[0]}</td>
          </tr>
          <tr>
            <th>12:00 ~ 18:00</th>
            <td>
              <input type='checkbox' />
              {data && data.plan[1]}
            </td>
            <td>
              <input type='checkbox' />
              {data && data.memo[1]}
            </td>
            <td></td>
            <td>{data && data.review[1]}</td>
          </tr>
          <tr>
            <th>18:00 ~ 24:00</th>
            <td>
              <input type='checkbox' />
              {data && data.plan[2]}
            </td>
            <td>
              <input type='checkbox' />
              {data && data.memo[2]}
            </td>
            <td></td>
            <td>{data && data.review[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
