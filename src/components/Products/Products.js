import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import NoSearch from "../../images/nosearch.png";

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

  p {
    margin-top: 10px;
    font-size: 18px;
    padding: 5px;
    font-weight: lighter;
  }

  @media (min-width: 780px) {
    cursor: pointer;
  }
`;

const DivHover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;

  &&:hover {
    background-color: #00d9ff73;
    transition: 0.3s;
    border-radius: 5px;
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

const Products = ({ searchProduct }) => {
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
              <p>{product.name}</p>
              <DivHover></DivHover>
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
