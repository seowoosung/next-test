export * from "./dark";
export * from "./light";

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { dark } from "./dark";
import { ITheme, light } from "./light";

export const ThemeContext = React.createContext({
  theme: "light",
  toggle: () => {
    void 0;
  },
  setTheme: undefined,
});

export const useTheme = (): {
  styles: ITheme;
  toggle: () => void;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
  themeName: string;
} => {
  const { theme, toggle, setTheme } = React.useContext(ThemeContext);

  return {
    styles: theme === "light" ? light : dark,
    toggle,
    setTheme,
    themeName: theme,
  };
};

interface IStyledThemProvider {
  children?: React.ReactNode;
}
export const StyledThemeProvider: React.FC<IStyledThemProvider> = ({ children }) => {
  const router = useRouter();
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    if (router.isReady) {
      const queryTheme = router.query.theme;
      if (queryTheme === "dark" || queryTheme === "light") {
        setTheme(queryTheme as string);
      }
    }
  }, [router.isReady]);

  const toggle = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      // URL에 테마를 query로 추가
      if (newTheme === "dark") {
        router.push(
          {
            pathname: router.pathname,
            query: { ...router.query, theme: "dark" },
          },
          undefined,
          { shallow: true },
        );
      } else {
        const { theme, ...restQuery } = router.query;
        router.push(
          {
            pathname: router.pathname,
            query: restQuery,
          },
          undefined,
          { shallow: true },
        );
      }
      return newTheme;
    });
  };
  const values = React.useMemo(
    () => ({
      theme,
      toggle,
      setTheme,
    }),
    [toggle, theme, setTheme],
  );

  return <ThemeContext.Provider value={values as any}>{children}</ThemeContext.Provider>;
};
