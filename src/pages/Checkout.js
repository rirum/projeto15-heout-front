import styled from "styled-components";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import AuthProvider from "../AppContext/auth";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { token } = useContext(AuthProvider);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [modified, setModified] = useState(false);
  const [cardNumber, setcardNumber] = useState([]);
  const [cardExpiration, setcardExpiration] = useState(0);
  const [tokenCard, settokenCard] = useState(false);

  useEffect(() => {
    async function findCart() {
      try {
        const getCartURL = `${process.env.REACT_APP_API_URL}/getCart`;
        const res = await axios.get(getCartURL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let sum = 0;
        setCart(res.data.products);
        res.data.products.map((item) => (sum += Number(item.newProduct.value)));
        setTotal(sum);
        setModified(false);
      } catch (error) {
        console.log(error);
      }
    }
    findCart();
  }, [modified]);

  async function buy(e) {
    e.preventDefault();
    const body = { cardNumber, cardExpiration, tokenCard };
    try {
      const purchaseURL = `${process.env.REACT_APP_API_URL}/purchase`;
      await axios.post(purchaseURL, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModified(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (!cart) return;

  return (
    <>
      <Header />
      <CheckoutWrapper>
        <CustomerInfo>
          <form onSubmit={e => buy(e)}>
            <TextForm> Preencha os seus dados para pagamento:</TextForm>

            <LoginInput
              placeholder="Número do cartão"
              type="number"
              value={cardNumber}
              onChange={(e) => setcardNumber(e.target.value)}
              required
            />
            <LoginInput
              placeholder="Data de vencimento do cartão"
              type="number"
              value={cardExpiration}
              onChange={(e) => setcardExpiration(e.target.value)}
              required
            />
            <LoginInput
              placeholder="Senha"
              type="password"
              value={tokenCard}
              onChange={(e) => settokenCard(e.target.value)}
              required
            />

            <LoginButton type="submit">Confirmar compra</LoginButton>
          </form>

          <Link to="/">
            <p>Cancelar</p>
          </Link>
        </CustomerInfo>

        <ProductsInfo>
          <h1>Confira seu pedido:</h1>
          {cart.map((product) => (
            <p>
              {product.newProduct.name} - R$ {product.newProduct.value}
            </p>
          ))}
          <h2>Total: R$ {total}</h2>
        </ProductsInfo>
      </CheckoutWrapper>
    </>
  );
}

const CheckoutWrapper = styled.div`
  display: flex;
`;

const CustomerInfo = styled.div`
  width: 500px;
  align-items: flex-start;
  p {
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const ProductsInfo = styled.div`
  width: 500px;
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
`;

const TextForm = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-top: 50px;
  margin-bottom: 24px;
`;

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
  &::placeholder {
    font-size: 15px;
    color: #b1a7a6;
    padding-left: 10px;
  }
`;

const LoginButton = styled.button`
  height: 40px;
  width: 326px;
  background-color: #ee6c4d;
  border: 1px solid #ee6c4d;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;
