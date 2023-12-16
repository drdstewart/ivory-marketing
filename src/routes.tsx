import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import App from "./pages/App";
import ServicesPage from "./pages/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
    ],
  },
]);

export { router };
