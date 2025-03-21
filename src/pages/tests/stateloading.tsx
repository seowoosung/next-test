import { getDefaultLayout } from "@/components/layout/default-layout";
import { Button, Spin } from "antd";
import { useState } from "react";

const StateLoadingTest = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onTriggerNextPage = () => {
    handleNextPage();
    handleNextPage();
  };

  const handleNextPage = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPage((prev) => prev + 1);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. 다음 페이지 버튼을 클릭하면(handleNextPage 2번 호출) page는 얼마가 될까? <br />
        <div className="text-sm mt-1">
          * Infinite 스크롤에서 빠르게 스크롤이 돼서 두번이 거의 연달아 호출되는 상황 가정
        </div>
      </div>
      <div className="text-lg font-semibold mb-2">page: {page}</div>
      <Button onClick={onTriggerNextPage} type="primary">
        다음 페이지
      </Button>
      <div>
        <Spin spinning={isLoading} />
      </div>
    </div>
  );
};

StateLoadingTest.getLayout = getDefaultLayout;
export default StateLoadingTest;
