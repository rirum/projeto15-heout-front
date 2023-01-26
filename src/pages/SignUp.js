import styled from "styled-components";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";


export default function SignUp(){
    return(
        <>
        <Header/>
        <WrapperForm>
        <form>
        <TextForm>Cadastre-se abaixo:</TextForm>
        <p>Nome:</p>
        <LoginInput placeholder="insira seu nome aqui" type="text" required/>
        <p>E-mail:</p>
        <LoginInput placeholder="insira seu e-mail aqui" type="email" required/>
        <p>Senha:</p>
        <LoginInput placeholder="insira sua senha aqui" type="password" required/>
        <p>Confirme sua senha:</p>
        <LoginInput placeholder="confirme sua senha aqui" type="password" required/>
        <LoginButton>Entrar</LoginButton>
        </form>


        <NavLink to="/login">
        <ContainerSignUp>Já tem uma conta? Faça o login aqui!</ContainerSignUp>
        </NavLink>
    </WrapperForm>
        

        </>
    )
}

const WrapperForm = styled.div`
width: 326px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
p{
font-size: 15px;
}
`

const TextForm = styled.div`
font-size: 32px;
font-weight: 400;
color: #000;
margin-top:50px;
margin-bottom: 24px;
text-align: center;
`

const LoginInput = styled.input`
height: 58px;
width: 326px;
border-radius: 5px;
border: 1px solid #293241;
background-color: #fff;
margin-top: 10px;
margin-bottom: 30px;
box-sizing: border-box;
padding-left: 15px;
font-size: 15px;
&::placeholder{
    font-size:20px;
    color: #D9D9D9;
    padding-left: 10px;
}
`

const LoginButton = styled.button`
height: 58px;
width: 326px;
background-color: #ee6c4d;
border: 1px solid #ee6c4d;
border-radius: 5px;
color: #fff;
font-size: 20px;

`

const ContainerSignUp = styled.div`
font-size: 15px;
font-weight: 700;
color: #000;
margin-top: 20px;
text-align: center;
`

const NavLink = styled(Link)`
text-decoration: none;
color: #000;
`