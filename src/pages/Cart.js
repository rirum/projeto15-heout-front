import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AuthProvider from "../AppContext/auth";
import { CartContext } from "../AppContext/CartContext.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

//caso carrinho vazio -> chamar WrapperBlank
//se não WrapperPurchase

export default function Cart() {
  const { token } = useContext(AuthProvider);
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    async function findCart() {
      try {
        const getCartURL = `${process.env.REACT_APP_API_URL}/getCart`;
        const res = await axios.get(getCartURL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(res.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    findCart();
  }, []);

if(!cart) return "h"

  return (
    <>
      <Header />
      {/* <WrapperBlank>
        <p>Seu carrinho está vazio</p>
        <ButtonGoBack>Volte para ver produtos</ButtonGoBack>
        </WrapperBlank> */}

      <WrapperPurchase>
        <ContainerPurchase>
          <StyledTitle>
            <p>Seu carrinho:</p>
          </StyledTitle>

          {cart.map((product) => (
            <ProductChosen>
              <ProductImage src={product.newProduct.pictures[0]}></ProductImage>
              <ProductDescription>{product.newProduct.name}</ProductDescription>
              <ProductPrice>{`R$ ${product.newProduct.value}`}</ProductPrice>
            </ProductChosen>
          ))}

        </ContainerPurchase>

        <ContainerPurchase>
          <WrapperTotal>
            <h1>Total:</h1>
            <p>R$20000,00</p>
          </WrapperTotal>

          <NavLink to="/checkout">
            <ButtonFinish>Finalizar compra</ButtonFinish>
          </NavLink>
        </ContainerPurchase>
      </WrapperPurchase>
    </>
  );
}

const WrapperBlank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  p {
    font-size: 40px;
  }
`;

const ButtonGoBack = styled.button`
  height: 58px;
  width: 326px;
  background-color: #ee6c4d;
  border: 1px solid #ee6c4d;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`;
const WrapperPurchase = styled.div`
  display: flex;
  width: 1000px;
`;
const StyledTitle = styled.div`
  p {
    font-size: 40px;
    margin-top: 50px;
  }
`;
const ContainerPurchase = styled.div`
  margin-bottom: 100px;
`;

const ProductChosen = styled.div`
  width: 900px;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 100px;
  background-color: #98c1d9;
`;

const ProductDescription = styled.div`
  width: 500px;
  word-break: break;
  font-size: 15px;
  margin-left: 20px;
`;

const ProductPrice = styled.div`
  width: 600px;
  font-size: 15px;
`;

const ButtonFinish = styled.button`
  width: 300px;
  height: 50px;
  color: #fff;
  background-color: #f06969;
  border-radius: 10px;
  border: 1px solid #f06969;
  margin-top: 500px;
  font-size: 20px;
`;

const WrapperTotal = styled.div`
  margin-top: 150px;
  h1 {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
