import SveneContent from "./layout/SveneContent";
import SveneNavigation from "./layout/SveneNavigation";
import "./css/index.css";
import CursorOverlay from "./misc/CursorOverlay";
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
        initial={{ opacity: 0.1 }}
        transition={{ duration: 2.5 }}
        animate={{
          opacity: 1,
        }}
      >
        <RouterProvider router={router} />
        <div className="noise">
          <SveneContent />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
