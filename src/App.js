import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    
    <ContainerApp>
    <AppProvider>
    <Routes>


    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />


    



    </Routes>
    </AppProvider>
    </ContainerApp>
    </BrowserRouter>
   
  );
}

export default App;


const ContainerApp = styled.div`
width:100vw;
min-height: 100vh;
background-color: #ECECEC;
margin: 0px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
font-family: 'Lexend', sans-serif;

`