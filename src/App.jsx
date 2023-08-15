import SveneContent from "./SveneContent";
import SveneNavigation from "./NavigationBar/SveneNavigation";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SveneNavigation/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <SveneContent />
    </div>
  );
}

export default App;
