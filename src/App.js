import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { AuthProvider } from "./AppContext/auth.js";
import CartProvider from "./AppContext/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ContainerApp>
        <CartProvider> 
        <Routes>
          <Route element={<AuthProvider />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
        </CartProvider>
      </ContainerApp>
    </BrowserRouter>
  );
}

export default App;

const ContainerApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ececec;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-family: "Lexend", sans-serif;
  overflow-x:hidden;
`;
