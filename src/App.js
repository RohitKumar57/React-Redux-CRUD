import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/AddUser/Create.jsx";
import ViewCustomer from "./components/ViewSingleCustomer/ViewCustomer.jsx";
import Home from "./components/Home/Home.jsx";
import Update from "./components/Update User/Update.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
        <Route path="/view/:id" element={<ViewCustomer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
