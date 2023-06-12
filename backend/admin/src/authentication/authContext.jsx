import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "../FormHandler/Form";

const API_URL = process.env.REACT_APP_SERVER_URI;

export const AuthContext = createContext({
    isAuthenticated : false,
    login: () => {},
    logout: () => {},
    verifyToken: () => {},
});

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const token = localStorage.getItem('token');
    
    const form = new Form();

    useEffect(() => {
        if(!token) return;
        
        setIsAuthenticated(true);
        if(location.pathname === "/"){
            navigate("/dashboard");
        }else {
            navigate(location.pathname);
        }
    }, [isAuthenticated]);

    const login = (token) => {
        console.log("hi");
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate('/dashboard');
    }

    const logout = () =>{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    }

    const verifyToken = () => {
    
        form.get(`/api/verify-token`)
            .then(response => {
                if (response.status === 200) {
                    return true;
                }
            }).catch(errors => {
                if(errors){
                    if(token){
                        localStorage.removeItem('token');
                        return navigate("/");
                    }else{
                        return "hello";
                    }
                }
            });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, verifyToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContextProvider};