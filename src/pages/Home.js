import styled from "styled-components";
import Header from "../components/Header";
import bannerVerao from "../img/banner-verao.jpg";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthProvider from "../AppContext/auth";
import { CartContext } from "../AppContext/CartContext";

export default function Home() {
  const baseURL = "https://heout.onrender.com";
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthProvider);
  const { addCart } = useContext(CartContext);

  useEffect(() => {
    showProducts();
  }, []);

  async function showProducts() {
    try {
      const URL = `${baseURL}/products`;

      axios.get(URL).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header />
      <WrapperTextBanner>
        <TextBanner>
          <h1>Devolução grátis!</h1>
          <p>40 dias para devolução</p>
        </TextBanner>
        <TextBanner>
          <h1>Peças exclusivas</h1>
          <p>Peças únicas para você</p>
        </TextBanner>
        <TextBanner>
          <h1>Festa de última hora?</h1>
          <p>Consulte frete expresso</p>
        </TextBanner>
      </WrapperTextBanner>
      <StyledBanner>
        {" "}
        <img src={bannerVerao} alt="banner" />
      </StyledBanner>

      <TextBanner>
        <h2>Seleção de produtos</h2>
      </TextBanner>

      <WrapperProducts>
        {products.map((product) => (
          <BoxProducts key={product._id}>
            <ContainerProduct>
              <img src={product.pictures[0]} key={product.description} />
            </ContainerProduct>
            <DescriptionProducts>
              <p>{product.description}</p>
            </DescriptionProducts>
            <ProductTitle>
              <TextProducts>
                <h1>R$ {product.value}</h1>{" "}
              </TextProducts>
              <BuyButton onClick={(e) => addCart(e, token, product)}>
                <p>adicionar ao carrinho</p>
              </BuyButton>
            </ProductTitle>
          </BoxProducts>
        ))}
      </WrapperProducts>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    overflow-x: hidden;
  }
`;

const WrapperTextBanner = styled.div`
  width: 99%;
  height: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;
const TextBanner = styled.div`
  h1 {
    font-size: 15px;
    font-weight: 600;
    color: #ee6c4d;
    margin-bottom: 2px;
  }
  h2 {
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 1%;
  }
  p {
    font-size: 10px;
    font-weight: 400;
  }
  @media (max-width: 500px) {
    text-align: center;
    h1 {
      font-size: 10px;
      font-weight: 600;
      color: #ee6c4d;
      margin-bottom: 2px;
    }
    h2 {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    p {
      font-size: 10px;
      font-weight: 400;
    }
  }
`;
const StyledBanner = styled.div`
  width: 100%;
  display-flex:
  justify-content:
  background-color: #98c1d9;
  margin-top: 10px;
  img {
    width: 100%;
  }
`;
const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 150px;
  box-sizing: border-box;
  padding: 10%;
  padding-top: 0;
  @media (max-width: 500px) {
    padding: 2%;
    padding-top: 0;
  }
`;

const BuyButton = styled.button`
  width: 33%;
  height: 25px;
  background-color: #f06969;
  border-radius: 5px;
  border: 1px solid #f06969;
  box-sizing: border-box;
  p {
    font-size: 10px;
    color: #fff;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const BoxProducts = styled.div`
  margin-right: 25px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 30%;
  }
`;

const ContainerProduct = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 70%;
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    img {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

const ProductTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const TextProducts = styled.div`
  width: 33%;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 12px;
    color: #293241;
    margin-top: 5px;
  }
  @media (max-width: 500px) {
    color: red;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    h1 {
      font-size: 16px;
    }
  }
`;

const DescriptionProducts = styled.div`
  width: 70%;
  text-align: center;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    color: #293241;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    width: 95%;
    p {
      font-size: 12px;
    }
  }
`;
