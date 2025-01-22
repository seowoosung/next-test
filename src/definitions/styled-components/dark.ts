import { colors } from "colors";
import { ITheme } from "./light";

const dark: ITheme = {
  common: {
    colors: {
      background: "#1F1D24",
      footerBG: colors.customGray[900],
      grayText: "#FFF",
      blackText: "#FFF",
    },
    class: {
      blackText: "text-white",
      grayText: "text-customGray-400",
      orangeText: "text-orange",
      headerBG: "bg-[#1F1D24]",
    },
  },
};

export { dark };
