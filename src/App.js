import React, { useEffect, useState } from "react";
import { getDatas } from "./api/api";
import DayListToThree from "./pages/DayListToThree";

export default function App() {
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
      <DayListToThree datas={datas} />
    </div>
  );
}
