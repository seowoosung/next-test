import { Header } from "@/components";
import { CHeaderHeight, CMaxWebWidth } from "@/styles/globalStyles";
import { Layout } from "antd";
import { colors } from "colors";
import { NextComponentType, NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
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
      <Header />
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
  min-height: calc(100vh - ${CHeaderHeight}px);
  background-color: ${(props) => props.backgroundColor ?? colors.lineBlue};
  display: flex;
  max-width: ${(props) => props.width}px;
  margin: auto;
  margin-top: ${CHeaderHeight}px;
  width: 100%;
`;

const Title = tw.div`
font-bold
text-lg
mb-[12px]
`;
