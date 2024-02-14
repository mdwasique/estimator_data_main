import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import UserScreen from "./pages/users/UserScreen";
import Layout from "./pages/layout/layout";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import RegisterScreen from "./pages/registerScreen/RegisterScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users" element={<UserScreen />} />
            <Route path="layout" element={<Layout />} />
            <Route path="loginscreen" element={<LoginScreen />} />
            <Route path="registerscreen" element={<RegisterScreen />} />

            {/* <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
