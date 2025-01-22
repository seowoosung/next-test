import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button, Divider } from "antd";
import { useEffect, useState } from "react";

const State3Test = () => {
  const [count1, setCount1] = useState(0); // 프리미티브 상태
  const [count2, setCount2] = useState({ value: 0 }); // 객체 상태
  const [count3, setCount3] = useState({ value: 0 }); // 객체 상태
  const [renderCount1, setRenderCount1] = useState(0);
  const [renderCount2, setRenderCount2] = useState(0);
  const [renderCount3, setRenderCount3] = useState(0);

  useEffect(() => {
    setRenderCount1((prev) => prev + 1);
  }, [count1]);

  useEffect(() => {
    setRenderCount2((prev) => prev + 1);
  }, [count2]);

  useEffect(() => {
    setRenderCount3((prev) => prev + 1);
  }, [count3]);

  const updateCount1 = () => {
    setCount1((prev) => prev);
  };

  const updateCount2 = () => {
    setCount2({ ...count2 });
  };

  const updateCount3 = () => {
    setCount3(count3);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        <p>Q1. Update Count1 버튼을 클릭할 때 renderCount1은 증가할까?</p>
        <p>Q2. Update Count2 버튼을 클릭할 때 renderCount2는 증가할까?</p>
        <p>Q2. Update Count3 버튼을 클릭할 때 renderCount3는 증가할까?</p>
      </div>
      <div className="text-lg font-semibold mb-4">
        <p>Render Count1: {renderCount1}</p>
      </div>
      <Button onClick={updateCount1} type="primary" className="mr-2">
        Update Count1 (프리미티브)
      </Button>
      <Divider />
      <div className="text-lg font-semibold mb-4">
        <p>Render Count2: {renderCount2}</p>
      </div>

      <Button onClick={updateCount2} type="primary">
        Update Count2 (객체)
      </Button>
      <Divider />
      <div className="text-lg font-semibold mb-4">
        <p>Render Count3: {renderCount3}</p>
      </div>

      <Button onClick={updateCount3} type="primary">
        Update Count3 (객체)
      </Button>
    </div>
  );
};

State3Test.getLayout = getDefaultLayout;
export default State3Test;
