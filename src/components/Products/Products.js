import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import NoSearch from "../../images/nosearch.png";
import BlueBuy from "../../images/buy-blue.svg";
import Coin from "../../images/coin.svg";

const Img = styled.img`
  width: 100%;
  border-radius: 15px;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;

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

  p{
    font-size: 30px;
    color: white;
  }
`;

const Reedem = styled.p`
font-size: 20px;
border-radius: 30px;
padding: 10px;
background-color: rgba(0, 0, 0, 0.600);
color: white;
font-weight: lighter;
margin-top: 15px;
`

const Name = styled.p`
font-size: 22px;
font-weight: lighter;
padding: 10px;
margin-top: 15px;
`

const Products = ({ searchProduct }) => {
  console.log(searchProduct);
  return (
    <AnimatePresence>
      <Container>
        {searchProduct.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          >
            <SectionProduct key={product._id}>
              <Img alt="" src={product.img.hdUrl} />
              <Name>{product.name}</Name>
              <DivHover>
                <ImgAdd alt="Buy " src={BlueBuy} />

                <DivContainer>
                  <DivPoints>
                    <p>{product.cost}</p>
                    <img alt="" src={Coin} />
                  </DivPoints>
                  <Reedem>Reedem Now</Reedem>
                </DivContainer>
              </DivHover>
            </SectionProduct>
          </motion.div>
        ))}
      </Container>

      {searchProduct.length === 0 && (
        <SectionNoProduct>
          <ImgNoSearch alt="" src={NoSearch} />
          <p>Producto no encontrado</p>
        </SectionNoProduct>
      )}
    </AnimatePresence>
  );
};

export default Products;
