// react
import * as React from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import PropTypes from "prop-types";
import componentsOverride from "./overrides";

import palette from "./palette";
// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};
export default function ThemeConfig({ children }) {
  const themeOptions = {
    palette,
  };
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
