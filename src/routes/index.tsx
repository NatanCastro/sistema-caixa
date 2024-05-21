import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Home2 from "../pages/home2";

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home2',
    element: <Home2 />
  }
],
  {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  })


