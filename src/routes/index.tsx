import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import { Home } from "@/pages/home";
import { DiagnosticChat } from "@/pages/diagnosticChat";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "diagnostico",
        element: <DiagnosticChat />,
      },
    ],
  },
]);
