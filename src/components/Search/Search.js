import React from "react";
import styled from "styled-components";
import Aerolab from "../../images/aerolab.png";

const Img = styled.img`
  width: 100%;
  z-index: 100;
`;

const P = styled.p`
  font-size: 12vw;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 500;
  color: white;
`;
const DivImg = styled.div`
  height: auto;
  position: relative;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 95vw;
  display: flex;
  margin: auto;
`;

const Select = styled.select`
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 95vw;
  display: flex;
  margin: auto;
  margin-top: 10px;

  @media (min-width: 780px) {
    display: none;
  }
`;
const Search = ({setValue}) => {

    const filterProduct = (e) => {
        setValue(e.target.value)
    }
  return (
    <section>
      <DivImg>
        <Img alt="aerolab" src={Aerolab} />
        <P>Electronics</P>
      </DivImg>

      <div>
        <Input type={"text"} onChange={filterProduct} placeholder="Ingrese el nombre del producto" />
      </div>

      <Select>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
        <option>Opcion</option>
      </Select>
    </section>
  );
};

export default Search;
