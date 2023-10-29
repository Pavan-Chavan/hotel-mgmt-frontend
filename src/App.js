import { createHashRouter, RouterProvider } from "react-router-dom";
import { route } from "./route";

const router = createHashRouter([route]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
