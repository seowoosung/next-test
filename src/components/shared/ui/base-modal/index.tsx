import { Modal as BaseModal, ModalProps } from "antd";
import CloseSVG from "public/icons/close.svg";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IDefaultModlalProps extends PropsWithChildren<ModalProps> {
  hasPadding?: boolean;
  backgroundColor?: string;
}
export const DefaultModal = ({
  children,
  title,
  hasPadding = true,
  backgroundColor = "#fff",
  ...modalProps
}: IDefaultModlalProps) => {
  return (
    <Modal
      {...modalProps}
      footer={null}
      hasPadding={hasPadding}
      closeIcon={<CloseSVG />}
      backgroundColor={backgroundColor}
    >
      <h3 className="text-2xl px-2">{title}</h3>
      <div className={`${hasPadding ? "pt-5 pb-2 px-2" : ""}`}>{children}</div>
    </Modal>
  );
};

const Modal = styled(BaseModal)<{ hasPadding: boolean; backgroundColor: string }>`
  &&& {
    .ant-modal-content {
      padding: ${(props) => (props.hasPadding ? "20px 20px" : "20px 0px 0px 0px")};
      min-height: 60vh;
      border-radius: 0px;
      background-color: ${(props) => props.backgroundColor};
    }
  }
`;
