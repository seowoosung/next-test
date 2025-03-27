import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button } from "antd";
import { useEffect, useState } from "react";

const State2Test = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 4) {
      setCount(100);
    }
  };

  const getClick = () => {
    if (count >= 3) {
      return count;
    }
    return "-";
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. Increment 버튼을 4번 클릭하면 count는 100이 그려질까? <br />
        <br />
        Q2. Increment 버튼을 3번 클릭하면 getClick에는 어떤 값이 그려질될까?
      </div>
      <div className="text-lg font-semibold mb-2">getClick: {getClick()}</div>
      <div className="text-lg font-semibold mb-2">Count: {count}</div>
      <Button onClick={() => setCount(count + 1)} type="primary">
        Increment
      </Button>
    </div>
  );
};

State2Test.getLayout = getDefaultLayout;
export default State2Test;
