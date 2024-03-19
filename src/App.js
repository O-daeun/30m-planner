import React from "react";

export default function App() {
  return (
    <div>
      <h2>하루 3등분 Planning</h2>
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
            <td><input type="checkbox" />위워크 가서 공부</td>
            <td><input type="checkbox" />11시 팀미팅</td>
            <td></td>
            <td>계획한 대로 함</td>
          </tr>
          <tr>
            <th>12:00 ~ 18:00</th>
            <td><input type="checkbox" />위워크 공부, 집으로</td>
            <td><input type="checkbox" />15시 매니저님 상담</td>
            <td></td>
            <td>조금 딴 짓을 많이 함</td>
          </tr>
          <tr>
            <th>18:00 ~ 24:00</th>
            <td><input type="checkbox" />저녁 식사, 풋살</td>
            <td><input type="checkbox" />20-22시 풋살</td>
            <td></td>
            <td>시간 짬 날 때 개인 프로젝트하자</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
