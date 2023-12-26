import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import EditPage from "./pages/EditPages";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<EditPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
