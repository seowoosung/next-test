import { getDefaultLayout, IDefaultLayoutPage } from "@/components/layout/default-layout";
import { CMaxWidth } from "@/styles/globalStyles";
import React from "react";
import styled from "styled-components";

const Error404: IDefaultLayoutPage = () => {
  return (
    <Error404Wrapper>
      <h1>404 | This page could not be found</h1>
    </Error404Wrapper>
  );
};

Error404.getLayout = getDefaultLayout;
export default Error404;

const Error404Wrapper = styled.div`
  max-width: ${CMaxWidth}px;
  width: 100%;
  margin: 20% auto;
  text-align: center;
`;
