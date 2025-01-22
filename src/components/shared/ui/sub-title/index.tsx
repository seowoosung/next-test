import { PropsWithChildren } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Subtitle = ({ children }: PropsWithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const TitleWrapperTW = tw.div`
flex
flex-row
font-bold
text-xl
text-center
my-2
ml-3
mb-5
`;

const TitleWrapper = styled(TitleWrapperTW)`
  svg {
    margin-right: 10px;
    position: relative;
    bottom: 1px;
  }
`;
