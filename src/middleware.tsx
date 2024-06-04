import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function Middlewares() {
  return (
    <RouterProvider router={routes} />
  );
}

export default Middlewares
