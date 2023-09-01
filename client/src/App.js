// import logo from './logo.svg';
import './App.css';
import AllUsers from './components/AllUsers';
import CodeForInterview from './components/CodeForInterview';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  // Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<CodeForInterview />} />

        <Route path="/codeForInterview" element={<CodeForInterview />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/allUser" element={<AllUsers />} />         
        <Route path="/editUser/:id" element={<EditUser />} />         
        
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router = {router}>
        <NavBar /> {/* NavBar is wrapped within the RouterProvider */}
      </RouterProvider>
    </div>

  );
}


const Root = ()=> {

  return (
    <>
      {/* <Link to="/">CodeForInterview</Link>
      <Link to="/codeForInterview">CodeForInterview</Link>
      <Link to="/addUser">AddUser</Link>
      <Link to="/allUser">AllUser</Link> */}

      <div>
        <NavBar />   
        <Outlet />
      </div>
    </>
  )

}

export default App;
