import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

export default function Home(){
    return(
        <>
        <Header/>
        <WrapperTextBanner>
            <TextBanner>
            <h1>Devolução grátis!</h1><p>40 dias para devolução</p>
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
        <StyledBanner> inserir imagem mais tarde</StyledBanner>

        <TextBanner><h2>Seleção de produtos</h2></TextBanner>


        <WrapperProducts>

        
      

        <BoxProducts>
        <ContainerProduct> inserir imagem mais tarde</ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$1909,99</h1> </TextProducts><BuyButton><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>Vestido poliéster festa curto lantejoula mini cintura vamos quebrar</p></TextProducts>
        </BoxProducts>

        <BoxProducts>
        <ContainerProduct> inserir imagem mais tarde</ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$19909,00</h1> </TextProducts><BuyButton><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>Vestido muitissimo longo</p></TextProducts>
         
        </BoxProducts>

        <BoxProducts>
        <ContainerProduct> inserir imagem mais tarde</ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$39,90</h1> </TextProducts><BuyButton><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>Cropped</p></TextProducts>
         
        </BoxProducts>
        <BoxProducts>
        <ContainerProduct> inserir imagem mais tarde</ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$50,00</h1> </TextProducts><BuyButton><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>Camiseta Básica</p></TextProducts>
         
        </BoxProducts>
        <BoxProducts>
        <ContainerProduct> inserir imagem mais tarde</ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$1999,00</h1> </TextProducts><BuyButton><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>Sobretudo em seda</p></TextProducts>
         
        </BoxProducts>



        </WrapperProducts>
        
        <Footer></Footer>

        </>
    )
}

const WrapperTextBanner = styled.div`
width: 1000px;
height: 50px;
margin-top: 30px;
display: flex;
justify-content: space-between;
`
const TextBanner = styled.div`
h1{ 
    font-size: 15px;
    font-weight: 600;
    color: #ee6c4d;
    margin-bottom: 2px;
}
h2{
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
}
p{ 
    font-size: 10px;
    font-weight: 400;
}
`
const StyledBanner = styled.div`
width: 1400px;
height: 400px;
background-color: #98c1d9;
margin-top: 10px;
`
const WrapperProducts = styled.div`
width: 1350px;
display: flex;
justify-content: space-between;

`

const BuyButton = styled.button`
width: 115px;
height: 25px;
background-color: #F06969;
border-radius: 5px;
border: 1px solid #F06969;
margin-top: 5px;
box-sizing: border-box;
p{
    font-size: 10px;
    color: #fff;
}
`
const BoxProducts = styled.div`
margin-right: 25px;
`

const ContainerProduct = styled.div`
width: 250px;
height: 300px;
background-color: #98c1d9;

`

const ProductTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5px;
`
const TextProducts = styled.div`

margin-right: 15px;

h1{ 
    font-size: 20px;
}
p{
    font-size: 12px;
    color: #293241;
    margin-top: 5px;
}


`