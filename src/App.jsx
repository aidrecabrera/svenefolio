import SveneContent from "./SveneContent";
import SveneNavigation from "./NavigationBar/SveneNavigation";
import "./css/index.css";
import CursorOverlay from "./Misc/CursorOverlay";
import { motion } from "framer-motion";
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
      <CursorOverlay className="z-50" />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        animate={{
          opacity: 1,
        }}
      >
        <RouterProvider router={router} />
        <SveneContent />
      </motion.div>
    </div>
  );
}

export default App;
