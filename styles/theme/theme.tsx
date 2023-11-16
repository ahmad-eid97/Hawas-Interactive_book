"use client"
//== Modules
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext({});
type ExtendedBreakpoints = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  xxl: number,
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1480,
      } as ExtendedBreakpoints,
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "0.75rem",
            padding: "7px 15px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        },
      },
    },
    typography: {
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
