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
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      animate={{
        opacity: 1,
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <RouterProvider router={router} />
      <CursorOverlay className="z-50" />
      <SveneContent />
    </motion.div>
  );
}

export default App;
