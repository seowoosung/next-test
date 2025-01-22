import { getDefaultLayout } from "@/components/layout/default-layout";
import { useGetDataQuery, useUpdateSlowMutation } from "@/redux/services/users/apis";
import { Button } from "antd";

const RTKSlowTest = () => {
  const { data: Info } = useGetDataQuery();
  const [updateSlow] = useUpdateSlowMutation();

  const onClickSuccess = () => {
    updateSlow({ id: 2 });
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. Update 버튼을 누르면 message는 V1을 표시하고 V2를 표시하게 될까?
        <div className="text-sm mt-1">
          * POST 요청의 응답이 오기전에 Tag Invalidate 요청이 먼저 발생하는지 여부
        </div>
      </div>
      <div className="text-lg font-semibold mb-4">
        Message: <span className="text-red">{Info?.message}</span>
      </div>
      <div className="flex flex-col gap-3 w-fit">
        <Button onClick={onClickSuccess} type="primary">
          Update
        </Button>
      </div>
    </div>
  );
};

RTKSlowTest.getLayout = getDefaultLayout;
export default RTKSlowTest;
