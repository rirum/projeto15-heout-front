import { createContext, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const baseURL = "https://heout.onrender.com";
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [modified, setModified] = useState(false);
  const navigate = useNavigate();

  async function findCart(token) {
    try {
      const getCartURL = `${baseURL}/getCart`;
      const res = await axios.get(getCartURL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let sum = 0;
      setCart(res.data.products);
      res.data.products.map((product) => (sum += Number(product.value)));
      setTotal(sum);
      setModified(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(e, token, productID) {
    e.preventDefault();
    const body = { productID: productID };
    try {
      const deleteProductURL = `${baseURL}/deleteProductsCart`;
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

  async function buy(e, token, cardNumber, cardExpiration, tokenCard) {
    e.preventDefault();
    if (isNaN(cardNumber) || cardNumber <= 0)
      return alert("Informe numero de cartão válido (somente números)!");
    if (cardExpiration === "" || cardExpiration <= 0 || !cardExpiration)
      return alert("Informe uma data válida!");
    if (isNaN(tokenCard) || tokenCard <= 0)
      return alert("Informe um número de segurança válido (somente números)!");

    const body = { cardNumber, cardExpiration, tokenCard };
    try {
      const purchaseURL = `${baseURL}/purchase`;
      const response = await axios.post(purchaseURL, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Compra concluída! Valor total: R$" + response.data.total);
      setModified(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function addCart(e, token, product) {
    e.preventDefault();
    console.log(token)
    if(!token || token===""){
      alert("É necessário realizar login para adicionar um produto ao carrinho!")      
      return navigate("/login");
    }
    try {
      const URL = `${baseURL}/postProductCart`;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(
        URL,
        {
          productID: product._id,
        },
        config
      );
      setCart(res.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, total, modified, setModified, findCart, deleteProduct, buy, addCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
