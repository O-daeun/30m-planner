import React, { useEffect, useState } from "react";
import DayToThree from "./pages/DayToThree";
import { getDatas } from "./api/api";

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
      <DayToThree datas={datas} />
    </div>
  );
}
