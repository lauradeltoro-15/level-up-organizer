import { ThemeProvider as Provider } from "styled-components";
import React from "react";

import Theme1 from "./theme-1";

const Themes = {
  Theme1,
};

const ThemeProvider = ({ children }): JSX.Element => {
  return <Provider theme={Themes.Theme1}>{children}</Provider>;
};

export default ThemeProvider;
