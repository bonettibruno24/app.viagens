import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Createtrip } from "./routes/create-trip";
import { TripDetailsPage } from "./routes/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Createtrip />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
]);


export function App() {
  return  <RouterProvider router={router} />
}


