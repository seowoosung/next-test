import { getDefaultLayout } from "@/components/layout/default-layout";
import { useRouter } from "next/router";

const Question1 = () => {
  const router = useRouter();

  if (router.pathname !== "/tests/question1") return <div></div>;

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">Q. 이 코드에서 고쳐야 할 부분은?</div>
      <div className="text-lg mb-4">
        Current Timestamp: <div className="font-bold">{Date.now()}</div>
      </div>
    </div>
  );
};

Question1.getLayout = getDefaultLayout;
export default Question1;
