import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../container/App";
import { Dashboard } from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={router} />;
};

export { Root };
