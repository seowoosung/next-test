import { colors } from "colors";

// nextjs purge 방지하려면 여기서 사용되는 색은 tailwind.config.js의 safelist에 등록해야함
export interface ITheme {
  common: Record<"colors" | "class", Record<string, string>>;
  statistics: Record<"colors" | "class", Record<string, string>>; // 테마페이지
  news: Record<"colors" | "class", Record<string, string>>; // 뉴스페이지
}

const light: ITheme = {
  common: {
    colors: {
      background: "#FFF",
      footerBG: "#FFF",
      grayText: colors.customGray[700],
      blackText: "#000",
    },
    class: {
      blackText: "text-black",
      grayText: "text-customGray-700",
      orangeText: "text-orange",
      headerBG: "bg-white",
    },
  },
};

export { light };
