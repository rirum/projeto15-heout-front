import styled from "styled-components";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const baseURL = "https://heout.onrender.com";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/register`, form);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleInputChange = useCallback(
    ({ target: { name, value } }) =>
      setForm({
        ...form,
        [name]: value,
      }),
    [form, setForm]
  );

  return (
    <>
      <Header />
      <WrapperForm>
        <form onSubmit={onSubmit}>
          <TextForm>Cadastre-se abaixo:</TextForm>
          <p>Nome:</p>
          <LoginInput
            placeholder="insira seu nome aqui"
            name="name"
            id="name"
            type="text"
            onChange={handleInputChange}
            required
          />
          <p>E-mail:</p>
          <LoginInput
            placeholder="insira seu e-mail aqui"
            name="email"
            id="email"
            type="email"
            onChange={handleInputChange}
            required
          />
          <p>Senha:</p>
          <LoginInput
            placeholder="insira sua senha aqui"
            name="password"
            id="password"
            type="password"
            onChange={handleInputChange}
            required
          />
          <p>Confirme sua senha:</p>
          <LoginInput
            placeholder="confirme sua senha aqui"
            name="password_confirmation"
            id="password_confirmation"
            type="password"
            onChange={handleInputChange}
            required
          />
          <LoginButton>Entrar</LoginButton>
        </form>

        <NavLink to="/login">
          <ContainerSignUp>
            Já tem uma conta? Faça o login aqui!
          </ContainerSignUp>
        </NavLink>
      </WrapperForm>
    </>
  );
}

const WrapperForm = styled.div`
  width: 326px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    font-size: 15px;
  }
`;

const TextForm = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #000;
  margin-top: 50px;
  margin-bottom: 24px;
  text-align: center;
`;

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
  &::placeholder {
    font-size: 20px;
    color: #d9d9d9;
    padding-left: 10px;
  }
`;

const LoginButton = styled.button`
  height: 58px;
  width: 326px;
  background-color: #ee6c4d;
  border: 1px solid #ee6c4d;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
`;

const ContainerSignUp = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #000;
  margin-top: 20px;
  text-align: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
