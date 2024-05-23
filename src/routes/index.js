import { createBrowserRouter } from "react-router-dom";
import ShareProducts from "../components/ShareProducts";
import App from "../App";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1>Home Page</h1>
            },
            {
                path: 'shop',
                element: <ShareProducts />
            }

        ]
    }
]);