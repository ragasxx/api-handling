import React, { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";

const StatusCodes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStatusCodes();
  }, []);

  const fetchStatusCodes = async () => {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/kitchen-sink/status-codes"
    );
    const json = await res.json();
    const dataArray = Object.values(json.data);
    setData(dataArray);
  };

  console.log(data);

  return (
    <div className="bg-gradient-to-b from-black to-slate-950 flex flex-wrap gap-2">
      {data.map((item) => (
        <StatusCard
          key={item.statusCode}
          statusCode={item.statusCode}
          description={item.description}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default StatusCodes;
