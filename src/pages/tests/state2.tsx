import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";

const State2Test = () => {
  const [count, setCount] = useState(0);
  const { messageApi } = useContext(MessageContext);

  const handleClick = () => {
    if (count >= 5) {
      messageApi.info("5번 클릭");
    }
  };

  const getClick = () => {
    if (count >= 7) {
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
        Q1. Increment 버튼을 5번 클릭하면 message는 출력될까? <br />
        <br />
        Q2. Increment 버튼을 7번 클릭하면 getClick에는 뭐가 출력될까?
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
