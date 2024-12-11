import { useEffect, useState } from "react";

export const Tiempo = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return <p className="text-gray-400 text-sm">{currentTime}</p>;
};

export const BuyDate = () => {
  const [currentTime, setCurrentTime] = useState("");


  useEffect(() => {
    setCurrentTime(new Date().toLocaleDateString());
  }, []);

  return <p className="px-6 py-3 ">{currentTime}</p>;
};
