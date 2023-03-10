import Main from "./pages/Main/Main";
import ManageCharity from "./pages/ManageCharity/ManageCharity";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },{
      path: "manageCharity",
      element: <ManageCharity />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
