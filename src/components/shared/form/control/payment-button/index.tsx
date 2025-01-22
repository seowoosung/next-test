import { Button } from "@/components";
import { MessageContext } from "@/lib/contexts/message-provider";
import { useConfirmPaymentMutation, usePreparePaymentMutation } from "@/redux/services/users/apis";
import { EProductType } from "@/redux/services/users/enums";
import { ButtonProps } from "antd";
import { RequestPayParams, RequestPayResponse } from "iamport-typings";
import { useContext } from "react";

interface IPaymentButtonProps extends ButtonProps {
  productType: EProductType;
}
export const PaymentButton = ({ productType, ...rest }: IPaymentButtonProps) => {
  const [preparePayment] = usePreparePaymentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();
  const { messageApi } = useContext(MessageContext);

  const handlePayment = async () => {
    const data = await preparePayment({ product_type: productType }).unwrap();
    const paymentParam: RequestPayParams = {
      pg: "danal_tpay",
      pay_method: "card", // 결제수단
      ...data,
    };

    const { IMP } = window;
    if (!IMP) return;
    IMP.init(process.env.NEXT_PUBLIC_IMP_UID || "");
    IMP.request_pay(paymentParam, onPaymentAccepted);
  };

  const onPaymentAccepted = async (response: RequestPayResponse) => {
    await confirmPayment({
      merchant_uid: response.merchant_uid,
      imp_uid: response.imp_uid,
    }).unwrap();
    messageApi.success("성공적으로 결제되었습니다");
    window.location.href = "/users";
  };

  return (
    <div className="w-full">
      <Button {...rest} onClick={handlePayment} className="w-full">
        선택한 멤버십 결제하기
      </Button>
    </div>
  );
};
