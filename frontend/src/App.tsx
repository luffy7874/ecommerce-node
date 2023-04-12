import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Header/TopBar';
import Menu from './Header/Menu';
import Footer from './Header/Footer';
import { routes } from './Routes/route';
import { RoutesType } from './Types/types';
import { Route, Routes } from 'react-router-dom';

function App() {

    const routers = (routeData: any) =>
        routeData.map((route: RoutesType, index: any) => {
            return <Route key={index} element={ route.component }  path={route.path} />
        });

    return (
        <main>
            <TopBar />
            <Menu />
            
            <Routes>
                { routers(routes) }
            </Routes>

            <Footer />
        </main>
    );
}

export default App;
