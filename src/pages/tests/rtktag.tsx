import { getDefaultLayout } from "@/components/layout/default-layout";
import {
  useGetDataQuery,
  useUpdateDataMutation,
  useUpdateFailMutation,
} from "@/redux/services/users/apis";
import { Button } from "antd";

const RTKTagTest = () => {
  const { data: Info } = useGetDataQuery();
  const [updateData] = useUpdateDataMutation();
  const [updateFailData] = useUpdateFailMutation();

  const onClickSuccess = () => {
    updateData({ id: 2 });
  };

  const onClickFail = () => {
    updateFailData({ id: 2 });
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. Success와 Fail 버튼을 누르면 message는 어떻게 될까?
      </div>
      <div className="text-lg font-semibold mb-4">
        Message: <span className="text-red">{Info?.message}</span>
      </div>
      <div className="flex flex-col gap-3 w-fit">
        <Button onClick={onClickSuccess} type="primary">
          Update Success
        </Button>
        <Button onClick={onClickFail} type="primary">
          Update Fail
        </Button>
      </div>
    </div>
  );
};

RTKTagTest.getLayout = getDefaultLayout;
export default RTKTagTest;
