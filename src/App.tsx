import { Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/defaultlayout";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

const NestedApp = () => {
  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <div data-testid="app">
      <Suspense>
          <NestedApp />
      </Suspense>
    </div>
  );
};

export default App;
