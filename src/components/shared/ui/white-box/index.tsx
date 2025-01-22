import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { colors } from "colors";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const WhiteBox = styled.div`
  border-radius: 8px;
  padding: 24px 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);
  background: white;
`;

export const BoxTitle = tw(FlexRowWrapper)`
  mb-3 text-base font-bold
`;

export const InnerBox = styled.div`
  background-color: ${colors.paleBlue};
  border-radius: 8px;
  padding: 16px;
`;

export const BoxSubtitle = tw.span`
  text-xs text-customGray-600 font-normal ml-1
`;
