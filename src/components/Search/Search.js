import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 15px;
  border: 1px solid rgba(188, 188, 188, 0.337);
  outline-color: rgba(0, 255, 255, 0.304);
  border-radius: 5px;
  width: 95vw;
  display: flex;
  margin: 5px auto;

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

const SectionPrice = styled.select`
  background-color: white;
@media (max-width: 780px){
  width: 95vw;
  display: flex;
  margin: auto;
}
  width: 155px;
  padding: 15px;
  margin-right: 15px;
  border: 1px solid rgba(188, 188, 188, 0.337);
  border-radius: 5px;
  outline-color: rgba(0, 255, 255, 0.304);
  ul {
    list-style: none;
    li {
      margin: 5px;
      margin-top: 5px;
    }
  }
`;

const Search = ({ setValue, setValueSelect }) => {
  const filterProduct = (e) => {
    setValue(e.target.value);
  };

  const changeValueSelect = (e) => {
    setValueSelect(e.target.value);
  };

  return (
    <Section>
      <Input
        type={"text"}
        onChange={filterProduct}
        placeholder="Ingrese el nombre del producto"
      />

      <SectionPrice onChange={changeValueSelect}>
        <option value={""}>Filtrar por precio</option>
        <option value={"Highest"}>Precio más alto</option>
        <option value={"Lowest"}>Precio más bajo</option>
      </SectionPrice>
    </Section>
  );
};

export default Search;
