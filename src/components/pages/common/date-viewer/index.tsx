import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { getKoreanDayOfWeek } from "@/lib/utils";
import dayjs from "dayjs";
import CalendarSVG from "public/icons/calendar.svg";
import styled from "styled-components";

interface IDateViewerProps {
  dateAt: string | undefined;
  weekDay?: boolean;
  empty?: React.ReactNode;
}
export const DateViewer: React.FC<IDateViewerProps> = ({ dateAt, weekDay = false, empty }) => {
  return (
    <FlexRowWrapper className="mt-6">
      <IconShadowWrapper>
        <CalendarSVG />
      </IconShadowWrapper>
      <div className="ml-2 font-bold text-base" style={{ marginTop: "1px" }}>
        {dateAt ? (
          <>
            {dayjs(dateAt).format("YYYY.MM.DD")}
            {weekDay && <>({getKoreanDayOfWeek(dateAt)})</>}
          </>
        ) : (
          <>{empty ? empty : "-"}</>
        )}
      </div>
    </FlexRowWrapper>
  );
};

const IconShadowWrapper = styled.div`
  display: inline-block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;
