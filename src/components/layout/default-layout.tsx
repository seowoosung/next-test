import { CMaxWebWidth } from "@/styles/globalStyles";
import { Layout, Menu } from "antd";
import { colors } from "colors";
import { NextComponentType, NextPage } from "next";
import router from "next/router";
import React from "react";
import styled from "styled-components";
import { FlexColWrapper } from "./flex-wrapper";

export interface IPageHeader {
  title: string;
}

export type IDefaultLayoutPage<P = Record<string, never>> = NextPage<P> & {
  getLayout?(page: NextComponentType, props: unknown): React.ReactNode;
  pageHeader?: IPageHeader;
};

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage;
}

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  return (
    <Layout>
      <Layout.Sider trigger={null}>
        <div className="bg-white p-2">
          <img src="/logo.png" width={80} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
      </Layout.Sider>
      <FlexColWrapper className="justify-between">
        <ContentWrapper width={CMaxWebWidth} style={{ padding: "32px 20px" }}>
          <div className="w-full">
            <Page {...props} />
          </div>
        </ContentWrapper>
      </FlexColWrapper>
    </Layout>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout {...props} Page={Page} />;
};

const ContentWrapper = styled.div<{ width: number; backgroundColor?: string }>`
  min-height: 100dvh;
  background-color: ${(props) => props.backgroundColor ?? colors.lineBlue};
  display: flex;
  max-width: ${(props) => props.width}px;
  margin: auto;
  width: 100%;
`;

const menuItems = [
  {
    key: "1",
    label: "state1",
    onClick: () => router.push("/tests/state1"),
  },
  {
    key: "2",
    label: "state2",
    onClick: () => router.push("/tests/state2"),
  },
  {
    key: "3",
    label: "state3",
    onClick: () => router.push("/tests/state3"),
  },
  {
    key: "3-2",
    label: "state4",
    onClick: () => router.push("/tests/state4"),
  },
  {
    key: "3-3",
    label: "state5",
    onClick: () => router.push("/tests/state5"),
  },
  {
    key: "4",
    label: "stateloading",
    onClick: () => router.push("/tests/stateloading"),
  },
  {
    key: "5",
    label: "stateredux",
    onClick: () => router.push("/tests/stateredux"),
  },
  {
    key: "6",
    label: "rtktag",
    onClick: () => router.push("/tests/rtktag"),
  },
  {
    key: "7",
    label: "rtkslow",
    onClick: () => router.push("/tests/rtkslow"),
  },
  {
    key: "8",
    label: "memo",
    onClick: () => router.push("/tests/memo"),
  },
  {
    key: "8-1",
    label: "listkey",
    onClick: () => router.push("/tests/listkey"),
  },
  {
    key: "9",
    label: "question1",
    onClick: () => router.push("/tests/question1"),
  },
  {
    key: "10",
    label: "question2",
    onClick: () => router.push("/tests/question2"),
  },
  {
    key: "11",
    label: "question3",
    onClick: () => router.push("/tests/question3"),
  },
  {
    key: "12",
    label: "question4",
    onClick: () => router.push("/tests/question4"),
  },
];
