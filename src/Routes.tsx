import { createBrowserRouter } from "react-router-dom"
import App from "./components/App"
import Contact from "./components/Contact"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/contact",
        element: <Contact />
    },
]);

export default routes;