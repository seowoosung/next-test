import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button } from "antd";
import { useState } from "react";

const State1Test = () => {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000); // 1초
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. Start Timer 버튼을 누르면 count는 어떻게 증가할까?
      </div>
      <div className="text-lg font-semibold mb-2">Count: {count}</div>
      <Button onClick={startTimer} type="primary">
        Start Timer
      </Button>
    </div>
  );
};

State1Test.getLayout = getDefaultLayout;
export default State1Test;
