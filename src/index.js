import { createRoot } from 'react-dom/client';
import "./index.css";

import App from './App';
import ErrorPage from './components/error-page.jsx';
import Miata from './components/Miata.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <RouterProvider router={router} />
  )