import { WhiteBox } from "@/components/shared/ui/white-box";
import WarningSVG from "public/icons/warning.svg";

export const Warning = () => {
  return (
    <WhiteBox className="my-6">
      <div className="flex justify-center mb-3">
        <WarningSVG />
      </div>
      <div className="text-customGray-1000">
        현재 정보에서 언급되는 종목은 매수/매도 추천이 아니며 시황에 따른 단순 참고자료입니다. 또한,
        현재 정보에서 언급되는 내용은 그 정확도와 신뢰도에 대하여 보장되지 않으며, 내용의 오기 또는
        오류가 있을 수 있고 투자자와 다른 시황관을 가질 수 있으니 투자 전 반드시 사실의 진위 여부에
        대하여 확인하고 투자자 본인의 판단에 따라 투자에 임하시기 바랍니다.
      </div>
    </WhiteBox>
  );
};
