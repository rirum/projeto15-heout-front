import styled from "styled-components";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import bannerVerao from "../img/banner-verao.jpg";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext/Context";
import  AuthProvider  from "../AppContext/auth";

export default function Home(){

    const [ products, setProducts ] = useState([]);
    const { cart, setCart } = useContext(AppContext);
    const { token } = useContext(AuthProvider);
    console.log(token)

    useEffect(()=> {
        showProducts();
    },[]);

    async function showProducts(){
        try{
            const URL = `${process.env.REACT_APP_API_URL}/products`;
            
            axios
            .get(URL)
            .then((response) =>{
                setProducts(response.data);
                
            })
        } catch(error){
            console.log(error);
        }
    }

    async function addCart(product){
       try {
        const URL = `${process.env.REACT_APP_API_URL}/postProductCart`;
        const config = { headers: { Authorization: `Bearer ${token}`}}
        axios.post(URL, {
            "productID": product._id
        }, config).then((response) => {
            setCart(response.data);
            
        });
       }catch(error){
        console.log(error);
       }
    }
    if(!products) return

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
        <StyledBanner> <img src={bannerVerao} alt="banner"/></StyledBanner>

        <TextBanner><h2>Seleção de produtos</h2></TextBanner>


        <WrapperProducts>

        
      
        {products.map((product) => 
        <BoxProducts>
        <ContainerProduct><img src={product.newProduct.pictures[0]} key={product.newProduct.description} /></ContainerProduct> 
         <ProductTitle><TextProducts><h1>R$ {product.newProduct.value}</h1> </TextProducts><BuyButton onClick={() => addCart(product)}><p>adicionar ao carrinho</p></BuyButton></ProductTitle>
         <TextProducts><p>{product.newProduct.description}</p></TextProducts>
        </BoxProducts>

        )}
  
     



        </WrapperProducts>
        
       

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
width: 1450px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-bottom: 150px;
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

img{
    width: 250px;
    height: 300px;
    margin-top: 5px;
}

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