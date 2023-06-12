import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";
import routes from "./routes";
import Topbar from "./pages/global/Topbar";
import { useContext, useEffect } from "react";
import ProtectedRoute from "./authentication/protected-routes";
import { AuthContext } from "./authentication/authContext";
import Form from "./FormHandler/Form";

const App = () => {

    const authContext = useContext(AuthContext);

    const form = new Form();
    
    const [theme, colorMode] = useMode();
    const token = localStorage.getItem('token');

    useEffect(() => {
        authContext.verifyToken(token);
    }, []);

    const handleLogout = () => {
        authContext.logout();
    }

    const router = (routesData) =>
        routesData.map((value) => {
            if(value.type === "private"){
                return (
                    <Route 
                        path={value.path} 
                        element={
                            <ProtectedRoute isAuthenticated={authContext.isAuthenticated}>
                                {value.component}
                            </ProtectedRoute>
                        } 
                        key={value.key}
                    />
                );
            }else{
                return <Route path={value.path} element={value.component} key={value.key} />
            }
        });

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyProSidebarProvider token={token}>
                <div style={{ height: "100%", width: "100%" }}>
                    <main>
                        {token && <Topbar handleLogout={handleLogout} />}
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
