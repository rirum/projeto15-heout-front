import styled from "styled-components";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";

//caso carrinho vazio -> chamar WrapperBlank
//se não WrapperPurchase


export default function Cart(){
    return(
        <>
        <Header/>
        
        {/* <WrapperBlank>
        <p>Seu carrinho está vazio</p>
        <ButtonGoBack>Volte para ver produtos</ButtonGoBack>
        </WrapperBlank> */}

        <WrapperPurchase>
        <ContainerPurchase>
        <StyledTitle><p>Seu carrinho:</p></StyledTitle>

            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>
            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>
            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>
            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>
            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>
            <ProductChosen>
                <ProductImage></ProductImage>
                <ProductDescription>Camisa polo extra giga algodão</ProductDescription>
                <ProductPrice>R$ 1900,00</ProductPrice>
            </ProductChosen>

            
          
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
    )
}

const WrapperBlank = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;
p{
    font-size:40px;
}
`

const ButtonGoBack = styled.button`
height: 58px;
width: 326px;
background-color: #ee6c4d;
border: 1px solid #ee6c4d;
border-radius: 5px;
color: #fff;
font-size: 20px;
margin-top: 20px;
`
const WrapperPurchase = styled.div`
display: flex;
width:1000px;
`
const StyledTitle = styled.div`
p{
    font-size: 40px;
    margin-top: 50px;
   
}
`
const ContainerPurchase = styled.div`
margin-bottom: 100px;
`

const ProductChosen = styled.div`
width: 900px;
display: flex;
margin-top: 20px;
align-items: center;
`

const ProductImage = styled.div`
width: 80px;
height: 100px;
background-color: #98C1D9;
`

const ProductDescription = styled.div`
width: 500px;
word-break: break;
font-size: 15px;
margin-left: 20px;
`

const ProductPrice = styled.div`
width: 600px; 
font-size: 15px;

`

const ButtonFinish = styled.button`
width: 300px;
height: 50px;
color: #fff;
background-color: #F06969;
border-radius: 10px;
border: 1px solid #F06969;
margin-top: 500px;
font-size: 20px;
`

const WrapperTotal = styled.div`
margin-top: 150px;
h1{
    font-weight: 700;
    margin-bottom: 5px;
}
`

const NavLink = styled(Link)`
text-decoration: none;
color: #000;
`