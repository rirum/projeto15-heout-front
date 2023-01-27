import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

import { useCallback, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../AppContext/auth.js"

export default function Login(){

    const [ form, setForm ] = useState({
        email: "",
        password: "",
      });
      const [ error, setError ] = useState(null);
      const { setToken, setUser } = useContext(AuthContext);
      const navigate = useNavigate();
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        axios.post('/authenticate', form)
          .then(({data}) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setToken(data.token);
            setUser(data.user);
            navigate('/home');
          }).catch(error => setError(error.response.data));
      }
    
      const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
        ...form,
        [name]: value,
      }), [form, setForm])

return(
    <>
    <Header></Header>

    <WrapperForm>
        <form onSubmit={onSubmit}>
        <TextForm> Já sou cliente</TextForm>
        <p>E-mail:</p>
        <LoginInput placeholder="insira seu e-mail aqui" type="email" name="email" id="email" onChange={handleInputChange} required/>
        <p>Senha:</p>
        <LoginInput placeholder="insira sua senha aqui" type="password" name="password" id="password" onChange={handleInputChange} required/>
        <LoginButton>Entrar</LoginButton>
        </form>

        <NavLink to="/sign-up">
        <ContainerSignUp>Primeira vez aqui? Cadastre-se!</ContainerSignUp>
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