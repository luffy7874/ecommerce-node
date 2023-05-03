import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import routes from "./routes";
import Topbar from "./pages/global/Topbar";

const App = () => {
    const [theme, colorMode] = useMode();

    const router = (routesData) =>
        routesData.map((value, index) => {
            return <Route path={value.path} element={value.component} key={index} />
        });


  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyProSidebarProvider>
                <div style={{ height: "100%", width: "100%" }}>
                    <main>
                        {/* <Topbar /> */}
                        <Routes>
                            {router(routes)}
                        </Routes>
                    </main>
                </div>
            </MyProSidebarProvider>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
