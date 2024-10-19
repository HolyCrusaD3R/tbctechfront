import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SmartContractPage from "./pages/SmartContractPage";
// import About from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/smartcontract/:id", element: <SmartContractPage /> },
  // { path: "/about", element: <About /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
