import styled from "styled-components";

export const IndentedText = styled.div<{ mark?: string }>`
  position: relative;
  padding-left: 12px;
  margin: 4px 0px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
  }
`;
