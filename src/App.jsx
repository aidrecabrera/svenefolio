import SveneContent from "./SveneContent";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
