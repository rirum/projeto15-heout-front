import styled from "styled-components";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";

export default function Checkout(){
    return(
        <>
        <Header/>
        <CheckoutWrapper>
        <CustomerInfo>

        <form>
        <TextForm> Preencha os seus dados para pagamento:</TextForm>
        
        <LoginInput placeholder="Número do cartão" type="text" required/>
        <LoginInput placeholder="Data de vencimento do cartão" type="text" required/>
        <LoginInput placeholder="Senha" type="password" required/>
        
        <LoginButton>Confirmar compra</LoginButton>
        </form>

        <NavLink to="/">
        <p>Cancelar</p>
        </NavLink>

        </CustomerInfo>


        <ProductsInfo>
        <h1>Confira seu pedido:</h1>
        <p>Camiseta básica - R$1999,99</p>
        <p>Camiseta básica - R$1999,99</p>
        <p>Camiseta básica - R$1999,99</p>
        <p>Camiseta básica - R$1999,99</p>
        <h2>Total: R$5000,00</h2>
        </ProductsInfo>


        </CheckoutWrapper>
      
        </>
    )
}

const CheckoutWrapper = styled.div`
display: flex;

`

const CustomerInfo = styled.div`
width: 500px;
align-items: flex-start;
p{ 
  margin-top: 10px;
}
`

const ProductsInfo = styled.div`
width: 500px;
margin-top: 100px;
h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
}
p{
    font-size: 16px;
    margin-bottom: 10px;
}
h2{
    font-size: 25px;
    margin-top: 30px;
}

`

const TextForm = styled.div`
font-size: 20px;
font-weight: 400;
color: #000;
margin-top:50px;
margin-bottom: 24px;

`

const LoginInput = styled.input`
height: 40px;
width: 326px;
border-radius: 5px;
border: 1px solid #293241;
background-color: #fff;
margin-top: 10px;
margin-bottom: 10px;
box-sizing: border-box;
padding-left: 15px;
font-size: 10px;
&::placeholder{
    font-size:15px;
    color: #b1a7a6;
    padding-left: 10px;
}
`

const LoginButton = styled.button`
height: 40px;
width: 326px;
background-color: #ee6c4d;
border: 1px solid #ee6c4d;
border-radius: 5px;
color: #fff;
font-size: 20px;
margin-top: 20px;

`

const NavLink = styled(Link)`
text-decoration: none;
color: #000;
`