import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home.jsx'
import Navbar from './../Components/Nav/Navbar.jsx';

const Routes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/home', element: <Home/> }
    ]);

    return routes;
}

function AppRoutes(){
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes></Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;