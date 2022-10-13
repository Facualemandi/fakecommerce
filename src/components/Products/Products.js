import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
`;

const SectionProduct = styled.section`
  margin: 5px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(196, 196, 196, 0.5);
  font-family: "Roboto", sans-serif;

  p {
    margin-top: 10px;
    font-size: 18px;
    padding: 5px;
  }
`;


const Products = ({ searchProduct }) => {
  return (
    <Container>
      {searchProduct.map((product) => (
        <SectionProduct key={product._id}>
          <Img alt="" src={product.img.hdUrl} />
          <p>{product.name}</p>
        </SectionProduct>
      ))}
    </Container>
  );
};

export default Products;
