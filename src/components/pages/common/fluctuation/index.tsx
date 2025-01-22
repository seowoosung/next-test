import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { integerCommifyFormatter } from "@/lib/utils";
import { toNumber } from "lodash";
import React from "react";

interface IFluctuationProps {
  diff?: string;
  ratio?: string;
  className?: string;
}
export const Fluctuation: React.FC<IFluctuationProps> = ({ diff, ratio, className }) => {
  return (
    <FlexRowWrapper className={`text-xs ${className}`}>
      {toNumber(diff) > 0 ? (
        <FluctuationDiff diff={diff} rising={true} />
      ) : (
        <FluctuationDiff diff={diff} rising={false} />
      )}
      &nbsp;
      <FluctuationRatio ratio={ratio} bracket={true} />
    </FlexRowWrapper>
  );
};

interface IFluctuationDiffProps {
  diff?: string;
  rising: boolean;
}
export const FluctuationDiff: React.FC<IFluctuationDiffProps> = ({ diff, rising }) => {
  return (
    <>
      {rising ? (
        <span className="text-red">▲&nbsp;{integerCommifyFormatter(Math.abs(toNumber(diff)))}</span>
      ) : (
        <span className="text-blue">
          ▼&nbsp;{integerCommifyFormatter(Math.abs(toNumber(diff)))}
        </span>
      )}
    </>
  );
};

interface IFluctuationRatioProps {
  ratio?: string;
  className?: string;
  bracket?: boolean;
}
export const FluctuationRatio: React.FC<IFluctuationRatioProps> = ({
  ratio,
  className,
  bracket = false,
}) => {
  return (
    <span className={className}>
      {toNumber(ratio) > 0 ? (
        <span className="text-red">
          {bracket && <>(</>}+{ratio}%{bracket && <>)</>}
        </span>
      ) : (
        <span className="text-blue">
          {bracket && <>(</>}
          {ratio}%{bracket && <>)</>}
        </span>
      )}
    </span>
  );
};
