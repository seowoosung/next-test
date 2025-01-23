import { getDefaultLayout } from "@/components/layout/default-layout";
import { updateCount } from "@/redux/slices";
import { TRootState } from "@/redux/store";
import { Button, Divider } from "antd";
import { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Question4 = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const countRef = useRef<number>();
  let countLet = 0;

  const handleClick = () => {
    setCount(count + 1);
    countRef.current = count + 1;
    countLet += 1;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateCount(countLet));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. Increment를 한번 눌렀을때 4개 값은? 두번 눌렀을때는?
      </div>
      <div className="text-lg font-semibold mb-4">Count: {count}</div>
      <div className="text-lg font-semibold mb-4">CountRef: {countRef.current}</div>
      <div className="text-lg font-semibold mb-4">CountLet: {countLet}</div>
      <Child />
      <div className="flex flex-col gap-3 w-fit">
        <Button onClick={handleClick} type="primary">
          Increment
        </Button>
      </div>
      <Divider />
    </div>
  );
};

const Child = () => {
  const reduxCount = useSelector((state: TRootState) => state.counter.count, shallowEqual);
  return (
    <>
      <div className="text-lg font-semibold mb-4">reduxCount: {reduxCount}</div>
    </>
  );
};

Question4.getLayout = getDefaultLayout;
export default Question4;
