import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/public/Login/Index';
import { Home } from '../pages/private/home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    },
]);
