import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import NoSearch from "../../images/nosearch.png";
import BlueBuy from "../../images/buy-blue.svg";
import Coin from "../../images/coin.svg";
import { helpHttp } from "../../helper/helphttps";
import { useTheContext } from "../../context/context";
import Swal from "sweetalert2";

const Img = styled.img`
  width: 100%;
  border-radius: 15px;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
  margin-bottom: 60px;

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1380px) {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1380px;
  }
`;

const DivHover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: none;

  &&:hover {
    background-color: #00d9ffb2;
    transition: 0.3s;
    border-radius: 5px;
  }
`;

const SectionProduct = styled.section`
  margin: 5px;
  font-family: "Roboto", sans-serif;
  height: max-content;
  position: relative;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  margin-top: 15px;
  min-height: 250px;

  &:hover {
    margin-top: -0px;
    transition: 0.6s;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }
  &:hover ${DivHover} {
    display: block;
  }

  @media (min-width: 780px) {
    cursor: pointer;
  }
`;

const SectionNoProduct = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: grey;
    font-weight: bold;
    font-size: 50px;
  }
`;

const ImgNoSearch = styled.img`
  width: 280px;
`;

const ImgAdd = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 30px;
    color: white;
  }
`;

const Reedem = styled.p`
  font-size: 20px;
  border-radius: 30px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: lighter;
  margin-top: 15px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: lighter;
  padding: 10px;
  margin-top: 15px;
`;

const OpenProduct = styled.section`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ImgView = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Question = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  font-weight: lighter;
  padding: 10px;
  color: white;
`;

const DivButtons = styled.div`
  display: flex;
  padding: 5px;
  margin-top: 15px;

  button {
    padding: 15px;
    width: 100%;
    margin: 5px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: ${({ value }) => (value ? "black" : "gray")};
    background-color: ${({ value }) => (value ? "aqua" : "#e2e8f0")};

    @media (min-width: 780px) {
      cursor: pointer;
      &:hover {
        background-color: ${({ value }) => (value ? "aqua" : "#d4deed")};
        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);
        transition: 0.3s;
      }
    }
  }
`;

const ContainerProdcut = styled.section`
  margin: 15px;
  border-radius: 10px;
  background-color: rgba(164, 164, 164, 0.501);
  backdrop-filter: blur(6px);
`;
const Category = styled.p`
  color: gray;
  font-weight: lighter;
  font-size: 14px;
  padding: 5px;
  padding-left: 10px;
`;

const Hr = styled.hr`
  width: 80%;
  margin: auto;
  border-color: white;
  opacity: 0.3;
`;

const Products = ({ searchProduct }) => {
  const [viewProduct, setViewProduct] = useState({});
  const [openProduct, setOpenProduct] = useState(false);
  const { data, refetch } = useTheContext();

  const getProduct = (product) => {
    setViewProduct(product);
    setOpenProduct(true);
  };

  const closedProduct = () => {
    setOpenProduct(false);
  };

  const addProductCart = async (productID) => {
    const findProduct = data.redeemHistory.find(
      (obj) => obj.productId === productID
    );

    if (data.redeemHistory.includes(findProduct)) {
      return Swal.fire(
        "Error",
        "Este producto ya esta agregado en el carrito",
        "error"
      );
    } else {
      const API = "https://coding-challenge-api.aerolab.co/redeem";
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },

        body: {
          productId: productID,
        },
      };
      const send = await Promise.all([helpHttp().post(API, options)]);
      refetch();
      setOpenProduct(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        timer: 1000,
      });

      return send;
    }
  };

  return (
    <>
      <Container>
        {searchProduct.map((product) => (
          <SectionProduct key={product._id}>
            <Img alt="" src={product.img.hdUrl} />
            <Hr />
            <Name>{product.name}</Name>
            <Category>{product.category}</Category>
            <DivHover>
              <ImgAdd alt="Buy " src={BlueBuy} />

              <DivContainer>
                <DivPoints>
                  <p>{product.cost}</p>
                  <img alt="" src={Coin} />
                </DivPoints>
                <Reedem onClick={() => getProduct(product)}>Reedem Now</Reedem>
              </DivContainer>
            </DivHover>
          </SectionProduct>
        ))}
      </Container>
      {searchProduct.length === 0 && (
        <SectionNoProduct>
          <ImgNoSearch alt="" src={NoSearch} />
          <p>Producto no encontrado</p>
        </SectionNoProduct>
      )}

      {openProduct && (
        <OpenProduct>
          <ContainerProdcut value={openProduct}>
            <ImgView alt="" src={viewProduct.img.hdUrl} />

            <Question>
              Quieres agregar el producto {viewProduct.name} por{" "}
              {viewProduct.cost} coins ?
            </Question>

            <DivButtons>
              <button onClick={closedProduct}>Cerrar</button>
              <button onClick={() => addProductCart(viewProduct._id)}>
                Agregar
              </button>
            </DivButtons>
          </ContainerProdcut>
        </OpenProduct>
      )}
    </>
  );
};

export default Products;
