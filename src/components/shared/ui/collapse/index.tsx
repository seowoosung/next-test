import { Collapse as BaseCollapse } from "antd";
import ArrowDownSVG from "public/icons/arrow-down.svg";
import ArrowUpSVG from "public/icons/arrow-up.svg";
import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";

interface ICollapseWrapper {
  title: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  closeChildren?: React.ReactNode;
  openChildren: React.ReactNode;
  style?: object;
}
export const CollapseWrapper = ({
  title,
  className,
  closeChildren,
  openChildren,
  defaultOpen = true,
  style = {},
}: PropsWithChildren<ICollapseWrapper>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapse
      style={{ ...style }}
      className={className}
      bordered={false}
      defaultActiveKey={defaultOpen ? "key" : undefined}
      expandIconPosition="end"
      expandIcon={({ isActive }: any) =>
        isActive ? <ArrowDownSVG height={10} /> : <ArrowUpSVG height={10} />
      }
      onChange={handleChange}
    >
      <Collapse.Panel header={title} key="key"></Collapse.Panel>
      <Wrapper style={{ maxHeight: isOpen ? "3000px" : "300px" }}>
        {isOpen ? openChildren : closeChildren}
      </Wrapper>
    </Collapse>
  );
};

const Wrapper = styled.div`
  transition: max-height 1s ease;
  max-height: 0px; // 초기 상태에서는 자식 요소들이 보이지 않음
  overflow: hidden; // 내용이 max-height를 초과할 경우 숨김
`;

const Collapse = styled(BaseCollapse)`
  &&& {
    background: none;
    .ant-collapse-header {
      padding: 0px;
    }
    .ant-collapse-content-box {
      padding: 0px;
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding-top: 0px;
    }
    .ant-collapse-item {
      border-bottom: none;
    }
  }
`;
