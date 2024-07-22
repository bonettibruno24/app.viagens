import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreatetripPages } from "./routes/create-trip";
import { TripDetailsPage } from "./routes/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatetripPages/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
]);


export function App() {
  return (
  <RouterProvider
   router={router}
    />
  )
}


