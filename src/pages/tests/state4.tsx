import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";

const State4Test = () => {
  const [count, setCount] = useState(0);
  const { messageApi } = useContext(MessageContext);

  const logCount = () => {
    messageApi.info(`Current count: ${count}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      logCount();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. Increment 버튼을 1번 클릭하면 message에 count는 어떤 값이 출력될까? <br />
      </div>
      <div className="text-lg font-semibold mb-2">Count: {count}</div>
      <Button onClick={() => setCount(count + 1)} type="primary">
        Increment
      </Button>
    </div>
  );
};

State4Test.getLayout = getDefaultLayout;
export default State4Test;
