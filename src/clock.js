import {useState, useEffect } from 'react';
import "./list.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  
  return (
    <div className="clock">
      <span>{time.toLocaleTimeString()}</span>
    </div>
  )
}

export default Clock;