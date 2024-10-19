import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SmartContractPage from "./pages/SmartContractPage";
import LogInPage from "./pages/LogInPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/smartcontract/:id", element: <SmartContractPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
