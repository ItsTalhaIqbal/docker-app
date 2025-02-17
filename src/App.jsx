
import { BrowserRouter,  Route, Routes } from "react-router";

import "./App.css";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/updateUser";
import Home from "../components/Home";
import DeleteUser from "../components/DeleteUser";


function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/deleteUser/:_id" element={<DeleteUser />} />
        <Route path="/editUser/:_id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
