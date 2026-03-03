import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import UsersList from "./users/usersList";
import AddNewUser from "./users/AddNewUser";
import UserEdit from "./users/UserEdit";



function App() {
  return (

    <>
      <Header />
      <Routes>
       <Route path="/" element={<UsersList/>}>Users List</Route>
        <Route path="/add-user" element={<AddNewUser/>}>Add New User</Route>
        <Route path="/user-edit/:id" element={<UserEdit/>}></Route>
      </Routes>




    </>
  )
}

export default App;