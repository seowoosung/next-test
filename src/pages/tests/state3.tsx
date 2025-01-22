import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button, Divider } from "antd";
import { useEffect, useState } from "react";

const State3Test = () => {
  const [count1, setCount1] = useState({ value: 0 }); // 객체 상태
  const [count2, setCount2] = useState(0); // 프리미티브 상태
  const [renderCount1, setRenderCount1] = useState(0);
  const [renderCount2, setRenderCount2] = useState(0);

  useEffect(() => {
    setRenderCount1((prev) => prev + 1);
  }, [count1]);

  useEffect(() => {
    setRenderCount2((prev) => prev + 1);
  }, [count2]);

  const updateCount1 = () => {
    setCount1({ ...count1 });
  };

  const updateCount2 = () => {
    setCount2((prev) => prev);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        <p>Q1. Update Count1 버튼을 클릭할 때 renderCount1은 증가할까?</p>
        <p>Q2. Update Count2 버튼을 클릭할 때 renderCount2는 증가할까?</p>
      </div>
      <div className="text-lg font-semibold mb-4">
        <p>Count2 (프리미티브): {count2}</p>
        <p>Render Count2: {renderCount2}</p>
      </div>

      <Button onClick={updateCount2} type="primary">
        Update Count2 (프리미티브)
      </Button>
      <Divider />
      <div className="text-lg font-semibold mb-4">
        <p>Count1 (객체): {count1.value}</p>
        <p>Render Count1: {renderCount1}</p>
      </div>
      <Button onClick={updateCount1} type="primary" className="mr-2">
        Update Count1 (객체)
      </Button>
    </div>
  );
};

State3Test.getLayout = getDefaultLayout;
export default State3Test;
