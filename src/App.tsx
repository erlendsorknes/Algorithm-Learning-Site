import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Frontpage from "./pages/Frontpage";
import Algorithms from "./pages/Algorithms/Algorithms";
import Footer from './components/Footer';
import ScrolledDown from './components/ScrolledDown';

interface NavRouteProps {
    exact: boolean,
    path: string,
    component: React.ReactNode
}

const NavRoute: React.FC<NavRouteProps> = ({exact, path, component}) => (
    <Route exact={exact} path={path} render={(props) => (
        <div>
            <Navbar/>
            {component}
        </div>
    )}/>
)

function App() {
    return (
        <div>
            <Switch>
                <NavRoute exact={true} path="/" component={<Frontpage />}/>
                <NavRoute exact={true} path="/algorithms" component={<Algorithms/>}/>
                <NavRoute exact={true} path="/datastructures" component={<Frontpage />}/>
            </Switch>
        </div>
    );
}


export default App;
