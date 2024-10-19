import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SmartContractPage from "./pages/SmartContractPage";
import LogInPage from "./pages/LogInPage";
import CreateContractPage from "./pages/CreateContractPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/create", element: <CreateContractPage /> },
  { path: "/smartcontract/:id", element: <SmartContractPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
