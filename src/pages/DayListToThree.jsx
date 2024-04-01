import React, { useEffect, useState } from "react";
import DayToThree from "../components/DayToThree";
import { getDatas } from "../api/api";

export default function DayListToThree() {
  const [datas, setDatas] = useState([]);

  const handleLoad = async () => {
    const newDatas = await getDatas();
    setDatas(newDatas);
  };

  useEffect(() => {
    handleLoad();
  }, []);
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
