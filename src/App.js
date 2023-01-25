import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <ContainerApp>
    <Header>

    </Header>

    </ContainerApp>
   
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