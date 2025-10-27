import { getDefaultLayout } from "@/components/layout/default-layout";
import { updateCount } from "@/redux/slices";
import { TRootState } from "@/redux/store";
import { Button, Divider } from "antd";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Question4 = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  let countLet = 0;

  const handleClick = () => {
    setCount(count + 1);
    countLet += 1;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateCount(countLet));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="text-base mb-10 text-customGray-800">
        Q1. Increment를 한번 누르고 1초 뒤에 3개 값은? 두번 눌렀을때는?
        {/* 만약 setCount를 지우고 똑같이 한다면 그 결과는? */}
      </div>
      <div className="text-lg mb-4">Count: {count}</div>
      <div className="text-lg mb-4">CountLet: {countLet}</div>
      <Child />
      <Button onClick={handleClick} type="primary">
        Increment
      </Button>
      <Divider />
    </>
  );
};

const Child = () => {
  const reduxCount = useSelector((state: TRootState) => state.counter.count, shallowEqual);
  return <div className="text-lg mb-4">reduxCount: {reduxCount}</div>;
};

Question4.getLayout = getDefaultLayout;
export default Question4;
