import { red } from "@material-ui/core/colors";
import createTheme from "@material-ui/core/styles/createTheme";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#0066ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
