import styled from "styled-components";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import AuthProvider from "../AppContext/auth";
import { Link } from "react-router-dom";
import { CartContext } from "../AppContext/CartContext";

export default function Checkout() {
  const { token } = useContext(AuthProvider);
  const { cart, total, modified, buy, findCart } = useContext(CartContext);
  const [cardNumber, setcardNumber] = useState("");
  const [cardExpiration, setcardExpiration] = useState("");
  const [tokenCard, settokenCard] = useState("");

  useEffect(() => {
    findCart(token);
  }, [token, modified]);

  if (!cart) return;

  return (
    <Container>
      <Header />
      <CheckoutWrapper>
        <CustomerInfo>
          <form
            onSubmit={(e) =>
              buy(e, token, cardNumber, cardExpiration, tokenCard)
            }
          >
            <TextForm> Preencha os seus dados para pagamento:</TextForm>

            <Input
              placeholder="Número do cartão"
              type="text"
              value={cardNumber}
              onChange={(e) => setcardNumber(e.target.value)}
              required
            />
            <Input
              placeholder="Data de vencimento do cartão"
              type="text"
              value={cardExpiration}
              onChange={(e) => setcardExpiration(e.target.value)}
              required
            />
            <Input
              placeholder="Código de segurança"
              type="text"
              value={tokenCard}
              onChange={(e) => settokenCard(e.target.value)}
              required
            />

            <Button type="submit">Confirmar compra</Button>
          </form>

          <Link to="/">
            <p>Cancelar</p>
          </Link>
        </CustomerInfo>

        <ProductsInfo>
          <h1>Confira seu pedido:</h1>
          {cart.map((product) => (
            <p>
              {product.name} - R$ {product.value}
            </p>
          ))}
          <h2>Total: R$ {total}</h2>
        </ProductsInfo>
      </CheckoutWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const CheckoutWrapper = styled.div`
  display: flex;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const CustomerInfo = styled.div`
  width: 50%;
  box-sizing:border-box;
  padding-left:15%;
  padding-right:10%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 500px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }
`;

const ProductsInfo = styled.div`
  width: 50%;
  margin-top: 100px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 25px;
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
    width: 90%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TextForm = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-top: 50px;
  margin-bottom: 24px;
`;

const Input = styled.input`
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
  &::placeholder {
    font-size: 15px;
    color: #b1a7a6;
    padding-left: 10px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 326px;
  background-color: #ee6c4d;
  border: 1px solid #ee6c4d;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;
