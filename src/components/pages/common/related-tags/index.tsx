import { FlexColWrapper, FlexRowWrapper } from "@/components/layout/flex-wrapper";
import {
  IClassification,
  IFinancialNews,
  IRelatedClassification,
  IRelatedStock,
} from "@/redux/services/stocks/types";
import { colors } from "colors";
import { get } from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { StockLink } from "../../stocks/stock-link";
import { ThemeLink } from "../../theme/theme-link";

interface IRelatedClassificationsProps {
  data: IRelatedClassification[];
}
export const RelatedClassifications: React.FC<IRelatedClassificationsProps> = ({ data }) => {
  if (data?.length <= 0) return <></>;
  const sortedData = sortedClassifications(data as any);
  return (
    <TagWrapper>
      <TagTitle>테마</TagTitle>
      {sortedData.map((classification: any) => (
        <Tag key={classification.id}>
          <ThemeLink
            name={<span>#{get(classification, "classification_name")}</span>}
            classificationId={get(classification, "classification_id", 0)}
          />
        </Tag>
      ))}
    </TagWrapper>
  );
};

interface IRelatedStocksProps {
  data: IRelatedStock[];
}
export const RelatedStocks: React.FC<IRelatedStocksProps> = ({ data }) => {
  if (data?.length <= 0) return <></>;
  return (
    <TagWrapper>
      <TagTitle>관련주</TagTitle>
      {data.map((stock) => (
        <Tag key={stock.id}>
          <StockLink
            name={<span>#{stock.stock_name}</span>}
            code={stock.stock_code}
            className="truncate"
          />
        </Tag>
      ))}
    </TagWrapper>
  );
};

interface IRelatedStockAndClassificationsProps {
  stocks: IRelatedStock[];
  classifications: IRelatedClassification[];
}
export const RelatedStockAndClassifications: React.FC<IRelatedStockAndClassificationsProps> = ({
  stocks,
  classifications,
}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedClassifications = showAll ? classifications : classifications.slice(0, 5);

  if (
    (Array.isArray(stocks) ? stocks.length : 0) <= 0 &&
    (Array.isArray(classifications) ? classifications.length : 0) <= 0
  ) {
    return <></>;
  }
  return (
    <TagWrapper>
      <FlexColWrapper>
        {classifications?.length > 0 && (
          <FlexRowWrapper className="flex-wrap">
            <TagTitle>테마</TagTitle>
            {displayedClassifications.map((classification) => (
              <Tag key={classification.id}>
                <ThemeLink
                  name={<span>#{classification.classification_name}</span>}
                  classificationId={classification.classification_id}
                />
              </Tag>
            ))}
            {classifications.length > 5 && !showAll && (
              <Tag key="more" onClick={() => setShowAll(true)}>
                <div className="font-bold">...</div>
              </Tag>
            )}
          </FlexRowWrapper>
        )}
        {stocks?.length > 0 && (
          <FlexRowWrapper className={classifications?.length > 0 ? "mt-1 flex-wrap" : "flex-wrap"}>
            <TagTitle>관련주</TagTitle>
            {stocks.map((stock) => (
              <Tag key={stock.id}>
                <StockLink
                  name={<span>#{stock.stock_name}</span>}
                  code={stock.stock_code}
                  className="truncate"
                />
              </Tag>
            ))}
          </FlexRowWrapper>
        )}
      </FlexColWrapper>
    </TagWrapper>
  );
};

export const TagTitle = styled.div`
  background-color: ${colors.darkBlue};
  color: white;
  border-radius: 4px;
  padding: 1px 4px 0px 4px;
  font-size: 11px;
  margin-right: 4px;
  white-space: nowrap;
`;

export const Tag = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin: 0px 4px;
`;

export const TagWrapper = styled(FlexRowWrapper)`
  background-color: ${colors.paleBlue};
  border-radius: 6px;
  padding: 10px;
  margin: 8px 0px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

// 뉴스에 직접 지정된 테마와 주식의 2차분류를 합쳐서 보여줌
export const mergeClassifications = (financialNews: IFinancialNews) => {
  const uniqueClassifications = new Map();

  financialNews.related_classifications.forEach((classification) => {
    if (
      classification.classification_id &&
      !uniqueClassifications.has(classification.classification_id)
    ) {
      uniqueClassifications.set(classification.classification_id, classification);
    }
  });

  financialNews.related_stocks.forEach((stock) => {
    stock.classifications.forEach((classification) => {
      if (
        classification.classification_id &&
        !uniqueClassifications.has(classification.classification_id)
      ) {
        uniqueClassifications.set(classification.classification_id, classification);
      }
    });
  });

  return sortedClassifications(Array.from(uniqueClassifications.values())) as any[];
};

// 테마가 너무 많이 생성되는 것을 방지하기 위해 변동률 Top5만 보여줌
const sortedClassifications = (classifications: IClassification[]) => {
  return classifications
    .filter((c) => c.classification_statistics?.change_rate !== null)
    .sort((a, b) => {
      const changeRateA = a.classification_statistics?.change_rate;
      const changeRateB = b.classification_statistics?.change_rate;

      if (changeRateA !== undefined && changeRateB !== undefined) {
        return parseFloat(changeRateB!) - parseFloat(changeRateA!);
      }

      return 0;
    });
};
