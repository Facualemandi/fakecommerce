import React, { useState } from "react";
import styled from "styled-components";

const category = [
  "Laptops",
  "Cameras",
  "Phones",
  "Phone Accessories",
  "Smart Hom",
  "PC Accessories",
  "Gaming",
  "Audio",
  "Tablets & E-Readers",
  "Drones",
];

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

const Ul = styled.ul`
  display: none;

  @media (min-width: 780px) {
    display: block;
    width: max-content;
    margin-top: 20px;
    border-radius: 5px;
    margin-left: 15px;

    li {
      list-style: none;
      padding: 15px;
      font-family: "Roboto", sans-serif;
      margin-top: 10px;
      background-color: #edf2f7;
      border-radius: 5px;
      &:hover {
        background-color: #00d9ff3b;
        transition: 0.5s;
        cursor: pointer;
      }
    }
  }
`;

const Search = ({ setValue, products }) => {
  const [selectColor, setSelectColor] = useState(true);

  const filterProduct = (e) => {
    setValue(e.target.value);
  };
  const viewProductsCategory = (obj) => {
    setValue(obj);
    if (!selectColor) {
      setSelectColor(true);
    } else {
      setSelectColor(false);
    }
  };
  const cleanInput = () => {
    setValue("");
  };

  return (
    <section>
      <Select onChange={filterProduct}>
        <option value={""}>Ver Todo</option>
        <option value={"Laptops"}>Laptops</option>
        <option value={"Cameras"}>Cameras</option>
        <option value={"Phones"}>Phones</option>
        <option value={"Phone Accessories"}>Phone Accessories</option>
        <option value={"Smart Home"}>Smart Home</option>
        <option value={"PC Accessories"}>PC Accessories</option>
        <option value={"Gaming"}>Gaming</option>
        <option value={"Audio"}>Audio</option>
        <option value={"Tablets & E-Readers"}>Tablets & E-Readers</option>
        <option value={"Drones"}>Drones</option>
      </Select>

      <Ul>
        <li onClick={cleanInput}>Ver todo</li>
        {category.map((obj) => (
          <li key={obj} value={selectColor} onClick={() => viewProductsCategory(obj)}>{obj}</li>
        ))}
      </Ul>
    </section>
  );
};

export default Search;
