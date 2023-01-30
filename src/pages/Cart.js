import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AuthProvider from "../AppContext/auth";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { token } = useContext(AuthProvider);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [modified, setModified] = useState(false);

  useEffect(() => {
    async function findCart() {
      try {
        const getCartURL = `${process.env.REACT_APP_API_URL}/getCart`;
        const res = await axios.get(getCartURL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        let sum = 0;
        setCart(res.data.products);
        res.data.products.map((item) => sum += Number(item.newProduct.value))
        setTotal(sum);
        setModified(false)
      } catch (error) {
        console.log(error);
      }
    }
    findCart();
  }, [modified]);

  async function deleteProduct(e,productID) {
    e.preventDefault();
    const body = { productID: productID };
    try {
      const deleteProductURL = `${process.env.REACT_APP_API_URL}/deleteProductsCart`;
      await axios.put(deleteProductURL, body, {
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
      {cart.length === 0 ? (
        <WrapperBlank>
          <p>Seu carrinho está vazio</p>
          <ButtonGoBack>Volte para ver produtos</ButtonGoBack>
        </WrapperBlank>
      ) : (
        <WrapperPurchase>
          <ContainerProduct>
            <StyledTitle>
              <p>Seu carrinho:</p>
            </StyledTitle>

            {cart.map((product) => (
              <ProductChosen>
                <ProductImage
                  src={product.newProduct.pictures[0]}
                ></ProductImage>
                <ProductDescription>
                  {product.newProduct.name}
                </ProductDescription>
                <ProductPrice>{`R$ ${product.newProduct.value}`}</ProductPrice>
                <ion-icon name="trash-outline" onClick={(e) => deleteProduct(e, product._id)}></ion-icon>
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
  width: 100%; ;
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
`;
const ContainerInfos = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  a {
    width:100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  h1 {
    margin-top: 20%;
    font-weight: 700;
    margin-bottom: 5px;
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


