import SveneContent from "./SveneContent";
import SveneNavigation from "./NavigationBar/SveneNavigation";
import "./css/index.css";
import CursorOverlay from "./Misc/CursorOverlay";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SveneNavigation />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <CursorOverlay className="z-50" />
      <SveneContent />
    </div>
  );
}

export default App;
