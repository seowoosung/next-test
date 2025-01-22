import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button, Switch } from "antd";
import { memo, useState } from "react";

const MemoTest = () => {
  const [count, setCount] = useState(0);
  const [isMemoized, setIsMemoized] = useState(false);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const onChange = (checked: boolean) => {
    setIsMemoized(checked);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">Q. 버튼 클릭시 Render는 호출될까?</div>
      <div className="text-lg">
        <div className="mb-10">
          <div>Count: {count}</div>
          <div className="mb-1">Memoized On: {String(isMemoized)}</div>
          <Switch onChange={onChange} />
        </div>
        <div>
          {isMemoized ? (
            <MemoizedChildButton onClick={onClick} name="Memoized Click" />
          ) : (
            <ChildButton onClick={onClick} name="Click" />
          )}
        </div>
      </div>
    </div>
  );
};

interface IChildButtonProps {
  onClick: () => void;
  name: string;
}

const ChildButton: React.FC<IChildButtonProps> = ({ onClick, name }) => {
  if (typeof window !== "undefined") {
    alert("Render");
  }
  return (
    <Button onClick={onClick} type="primary">
      {name}
    </Button>
  );
};

const MemoizedChildButton = memo(ChildButton);

MemoTest.getLayout = getDefaultLayout;
export default MemoTest;
