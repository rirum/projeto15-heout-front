import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AuthProvider from "../AppContext/auth";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../AppContext/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { token } = useContext(AuthProvider);
  const { cart, total, modified, findCart, deleteProduct } =
    useContext(CartContext);

  useEffect(() => {
    findCart(token);
  }, [token, modified]);

  if (!cart) return;

  return (
    <Container>
      <Header />
      {cart.length === 0 ? (
        <WrapperBlank>
          <p>Seu carrinho está vazio</p>
          <ButtonGoBack onClick={()=>navigate("/")}>Volte para ver produtos</ButtonGoBack>
        </WrapperBlank>
      ) : (
        <WrapperPurchase>
          <ContainerProduct>
            <StyledTitle>
              <p>Seu carrinho:</p>
            </StyledTitle>

            {cart.map((product) => (
              <ProductChosen>
                <ProductImage src={product.pictures[0]}></ProductImage>
                <ProductDescription>{product.name}</ProductDescription>
                <ProductPrice>{`R$ ${product.value}`}</ProductPrice>
                <ion-icon
                  name="trash-outline"
                  onClick={(e) => deleteProduct(e, token, product._id)}
                ></ion-icon>
              </ProductChosen>
            ))}
          </ContainerProduct>

          <ContainerInfos>
            <h1>Total:</h1>
            <p>R$ {total.toFixed(2)}</p>
            <Link to="/checkout">
              <ButtonFinish>Finalizar compra</ButtonFinish>
            </Link>
          </ContainerInfos>
        </WrapperPurchase>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

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
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const StyledTitle = styled.div`
  p {
    font-size: 40px;
    margin-top: 50px;
  }
`;
const ContainerProduct = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  ion-icon {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ContainerInfos = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  h1 {
    margin-top: 20%;
    font-weight: 700;
    margin-bottom: 5px;
  }
  @media (max-width: 500px) {
    width: 100%;
    h1 {
      margin-top: 5%;
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
`;

const ProductChosen = styled.div`
  width: 70%;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
  ion-icon {
    width: 10%;
    font-size: 35px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 15%;
  background-color: #98c1d9;
`;

const ProductDescription = styled.div`
  width: 35%;
  word-break: break;
  font-size: 15px;
`;

const ProductPrice = styled.div`
  width: 15%;
  font-size: 15px;
`;

const ButtonFinish = styled.button`
  width: 70%;
  height: 50px;
  color: #fff;
  background-color: #f06969;
  border-radius: 10px;
  border: 1px solid #f06969;
  font-size: 20px;
  margin-top: 5%;
`;
