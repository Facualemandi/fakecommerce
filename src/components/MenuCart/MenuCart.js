import React, { useState } from "react";
import styled from "styled-components";
import { useTheContext } from "../../context/context";
import icon from "../../images/aerolabicon.svg";
import coin from "../../images/coin.svg";
import { RiShoppingCartFill } from "react-icons/ri";
import { helpHttp } from "../../helper/helphttps";
import { useQuery } from "@tanstack/react-query";
import LoaderCoin from "../Loader/LoaderCoin/LoaderCoin";

const Contianer = styled.section`
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media (min-width: 780px){
    top: 0px;
  }
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
    font-weight: lighter;
  }
`;

const SectionCart = styled.section`
  position: fixed;
  height: 100px;
  width: 100%;
  transform: ${({ value }) =>
    value ? "translateY(-60px)" : "translateY(100%)"};
  transition: 0.5s;
  bottom: 0px;
  background-color: white;
  z-index: 5000;

  @media (min-width: 780px){
    transform: ${({ value }) => value ? "translateX(50%)" : "translateX(100%)"};
    height: 100%;
    background-color: white;
    top: 60px;
  }
`;

const MenuCart = () => {
  const [openCart, setOpenCart] = useState(false);
  const { data, refetch, isFetching } = useTheContext();
  const API_POINTS = "https://coding-challenge-api.aerolab.co/user/points";

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },

    body: {
      amount: 1000,
    },
  };

  const AddCoins = async () => {
    const response = await Promise.all([helpHttp().post(API_POINTS, options)]);
    refetch();
    return response;
  };

  const openMenuCart = () => {
    if (!openCart) {
      setOpenCart(true);
    } else {
      setOpenCart(false);
    }
  };
  return (
    <>
      <Contianer>
        <img alt="aerolab" src={icon} />

        <DivPoints>
          {isFetching ? (
            <LoaderCoin />
          ) : (
            <>
              <p>{data.points}</p>
              <img alt="coin" src={coin} onClick={AddCoins} />
            </>
          )}
        </DivPoints>

        <Cart onClick={openMenuCart} />
      </Contianer>

      <SectionCart value={openCart}></SectionCart>
    </>
  );
};

export default MenuCart;
