import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AddContact from "./pages/AddContact";
import Contact from "./pages/Contact";
import EditContact from "./pages/EditContact"; 
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";
import { Single } from "./pages/Single";
import Card from "./components/Card";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/card" element={<Card />} />
      <Route path="/edit-contact/:contactId" element={<EditContact />} />
    </Route>
  )
);