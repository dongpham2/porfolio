import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/defaultlayout";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import TechStack from "./pages/TechStack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/tech-stack",
        element: <TechStack />,
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
