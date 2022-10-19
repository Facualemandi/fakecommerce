import React, { useState } from "react";
import styled from "styled-components";

const category = [
  { name: "Laptops", validate: false, id: 2 },
  { name: "Cameras", validate: false, id: 3 },
  { name: "Phones", validate: false, id: 4 },
  { name: "Phone Accessories", validate: false, id: 5 },
  { name: "Smart Home", validate: false, id: 6 },
  { name: "PC Accessories", validate: false, id: 7 },
  { name: "Gaming", validate: false, id: 8 },
  { name: "Audio", validate: false, id: 9 },
  { name: "Tablets & E-Readers", validate: false, id: 10 },
  { name: "Drones", validate: false, id: 11 },
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
  }
`;

const Li = styled.li`
  list-style: none;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  background-color: #e2e8f0;
  border-radius: 15px;
  color: ${({ value }) => (value ? "black" : "gray")};
  background-color: ${({ value }) => (value ? "aqua" : "#e2e8f0")};

  &:hover {
    background-color: ${({ value }) => (value ? "aqua" : "#d4deed")};
    cursor: pointer;
    transition: 0.5s;
  }
`;

const ViewAll = styled.li`
  list-style: none;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  border-radius: 15px;
  color: ${({ value }) => (value ? "black" : "gray")};
  background-color: ${({ value }) => (value ? "aqua" : "#e2e8f0")};
  @media (min-width: 780px) {
    cursor: pointer;
    background-color: ${({ value }) => (!value ? "#e2e8f0" : "aqua")};
    color: black;
  }
`;

const Search = ({ setValue }) => {
  const [selectColor, setSelectColor] = useState(true);

  const filterProduct = (e) => {
    setValue(e.target.value);
  };
  const viewProductsCategory = (obj) => {
    setValue(obj);
  };
  
  const cleanInput = () => {
    setValue("");
    setSelectColor(true);
    const allFalseCaategory = category.map((obj) => (obj.validate = false));
    return allFalseCaategory;
  };

  const selectInDesktop = (obj) => {
    const objectValidateTrue = category.find((item) => item.validate === true);

    if (objectValidateTrue) {
      objectValidateTrue.validate = false;
    }

    setSelectColor(false);
    const findI = category.findIndex((element) => element.id === obj.id);
    const newObject = category;
    return {
      ...category,
      ...(newObject[findI].validate = true),
    };
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
        <ViewAll onClick={cleanInput} value={selectColor}>Ver todo</ViewAll>
        {category.map((obj) => (
          <section key={obj.name} onClick={() => selectInDesktop(obj)}>
            <Li
              value={obj.validate}
              onClick={() => viewProductsCategory(obj.name)}
            >
              {obj.name}
            </Li>
          </section>
        ))}
      </Ul>
    </section>
  );
};

export default Search;
