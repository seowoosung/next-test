import { colors } from "colors";
import ArrowDownSVG from "public/icons/arrow-down.svg";
import ArrowUpSVG from "public/icons/arrow-up.svg";

interface ILoadMoreProps {
  onClick: () => void;
  paddingClass?: string;
  textColor?: string;
  backgroundColor?: string;
}
export const LoadMore = ({
  onClick,
  paddingClass,
  textColor = "text-customGray-600",
  backgroundColor = "bg-white",
}: ILoadMoreProps) => {
  return (
    <div
      className={`w-fit text-center flex items-center cursor-pointer m-auto ${
        paddingClass ?? "px-4 py-1"
      }`}
      onClick={onClick}
      style={{
        borderRadius: "100px",
        border: `1px solid ${colors.customGray["300"]}`,
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className={`mr-1 whitespace-nowrap text-sm hover:text-orange`}
        style={{ color: textColor }}
      >
        더보기
      </div>
      <ArrowDownSVG height={6} style={{ color: textColor }} />
    </div>
  );
};

interface ILoadPreviousProps {
  onClick: () => void;
  title: string;
}
export const LoadPrevious = ({ onClick, title }: ILoadPreviousProps) => {
  return (
    <div
      className="w-fit text-center flex items-center px-4 py-1 cursor-pointer m-auto bg-white"
      onClick={onClick}
      style={{ borderRadius: "100px", border: `1px solid ${colors.customGray["300"]}` }}
    >
      <div className="mr-1 whitespace-nowrap text-sm">{title}</div>
      <ArrowUpSVG height={6} />
    </div>
  );
};
