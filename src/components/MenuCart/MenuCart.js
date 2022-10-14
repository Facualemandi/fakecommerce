import React from "react";
import styled from "styled-components";
import { useTheContext } from "../../context/context";
import icon from "../../images/aerolabicon.svg";
import coin from "../../images/coin.svg";
import { RiShoppingCartFill } from "react-icons/ri";

const Contianer = styled.section`
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Cart = styled(RiShoppingCartFill)`
  width: 35px;
  height: 35px;
  color: rgb(34, 255, 255);
`;

const DivPoints = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    margin-right: 5px;
  }
`;

const MenuCart = () => {
  const { data } = useTheContext();
  console.log(data);

  return (
    <Contianer>
      <img alt="aerolab" src={icon} />

      <DivPoints>
        <p>{data.points}</p>
        <img alt="coin" src={coin} />
      </DivPoints>

      <Cart />
    </Contianer>
  );
};

export default MenuCart;
