import {
  red,
  green,
  yellow,
  orange,
  blue,
  deepPurple,
} from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = {
  lifeBar: createTheme({
    palette: {
      primary: green,
      secondary: orange,
      error: red,
    },
  }),
  manaBar: createTheme({
    palette: {
      primary: blue,
      secondary: orange,
      error: red,
    },
  }),
  speedBar: createTheme({
    palette: {
      primary: deepPurple,
      secondary: orange,
      error: red,
    },
  }),
};
