import { Tabs as BaseTabs } from "antd";
import { TabsProps } from "antd/lib/tabs";
import { colors } from "colors";
import React from "react";
import styled from "styled-components";

type ITabsProps = TabsProps;
export const Tabs: React.FC<ITabsProps> = ({ ...rest }) => {
  return <TabsWrapper {...rest} data-testid="tabs" />;
};

const TabsWrapper = styled(BaseTabs)<ITabsProps>`
  .ant-tabs-tab:not(.ant-tabs-tab-disabled) {
    color: ${colors.customGray};
    font-weight: bold;
  }
  .ant-tabs-nav {
    margin: 0px 0px 30px 0px;
  }
`;
