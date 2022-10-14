import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 15px;
  border: 1px solid rgba(188, 188, 188, 0.337);
   outline-color: rgba(0, 255, 255, 0.304);
  border-radius: 5px;
  width: 95vw;
  display: flex;
  margin: auto;

  @media (min-width: 780px) {
      width: 580px;
      margin: 0;
  }
  @media (min-width: 1080px) {
      width: 880px;
  }
  @media (min-width: 1380px) {
      width: 1180px;
  }
`;

const Section = styled.section`
  @media (min-width: 780px) {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
    width: 780px;
    margin: auto;
    padding: 10px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Search = ({ setValue }) => {
  const filterProduct = (e) => {
    setValue(e.target.value);
  };
  return (
    <Section>
      <Input
        type={"text"}
        onChange={filterProduct}
        placeholder="Ingrese el nombre del producto"
      />
    </Section>
  );
};

export default Search;
