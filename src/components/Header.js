import styled from "styled-components";
import { RxPerson, RxInstagramLogo } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

export default function Header(){
    return(
<>
        <MiniBanner>
        
        <StyledText>
            <FaShippingFast size={18} color="white" />
            <p>Frete grátis sem valor mínimo! Aproveite a promoção!</p>
        </StyledText>

        <div><p>Enviamos para todo Brasil!</p></div>
        </MiniBanner>

        <WrapperHeader>

           
            <NavLink to="/">
            <StyledTitle>
            <h1>HEOUT</h1>
            </StyledTitle>
            </NavLink>


            <StyledIcons>
                
            <NavLink to="#"><RxInstagramLogo size={30} color="#293241"/></NavLink>
            <NavLink to="/login"><RxPerson size={30} color="#293241"/></NavLink>
            <NavLink to="/cart"><HiOutlineShoppingCart size={30} color="#293241"/></NavLink>
            
            </StyledIcons>
            
        </WrapperHeader>
        </>
    )
}


const MiniBanner = styled.div`
height: 30px;
width: 100%;
background-color: #ee6c4d;
display: flex;
align-items: center;
justify-content: space-around;

p{
    color: #fff;
    font-size: 15px;
    margin-left:10px ;
}
`

const StyledText = styled.div`
display: flex;
`
const NavLink = styled(Link)`
text-decoration: none;
color: #000;
`
const WrapperHeader = styled.div`
    height: 100px;
    width: 100%;
    background-color: #fff;
   display: flex;
   justify-content: space-around;


`

const StyledTitle = styled.div`
width: 200px;


 h1{ 
        margin-top: 30px;
        font-size: 50px;
        font-weight: 600; 
        
    }
`

const StyledIcons = styled.div`
width: 150px;
display: flex;
margin-top: 40px;
justify-content: space-between;


`