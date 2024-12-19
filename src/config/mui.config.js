import { createTheme } from "@mui/material/styles";
import { mainTheme } from "../utils/theme.js";

const muiTheme = createTheme({
  palette: mainTheme.palette,
});

export default muiTheme;
