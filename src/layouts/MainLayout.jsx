import { ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import muiTheme from "../config/mui.config";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
      </ThemeProvider>
    </div>
  );
};
