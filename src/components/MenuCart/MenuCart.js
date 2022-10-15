import React, { useState } from "react";
import styled from "styled-components";
import { useTheContext } from "../../context/context";
import icon from "../../images/aerolabicon.svg";
import coin from "../../images/coin.svg";
import { RiShoppingCartFill } from "react-icons/ri";
import { helpHttp } from "../../helper/helphttps";
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
  z-index: 10000;

  @media (min-width: 780px) {
    top: 0px;
  }
`;
const Cart = styled(RiShoppingCartFill)`
  width: 35px;
  height: 35px;
  color: rgb(34, 255, 255);

  @media (min-width: 780px) {
    cursor: pointer;
  }
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
  height: auto;
  width: 100%;
  transform: ${({ value }) =>
    value ? "translateY(-60px)" : "translateY(100%)"};
  transition: 0.5s;
  bottom: 0px;
  background-color: white;
  z-index: 5000;
  overflow-y: scroll;

  @media (max-width: 780px){
    max-height: 600px;
  }

  @media (min-width: 780px) {
    transform: ${({ value }) =>
      value ? "translateX(-0%)" : "translateX(100%)"};
    height: 100%;
    background-color: white;
    top: 60px;
    right: 0px;
    width: 400px;
    overflow-y: auto;
    padding-bottom: 70px;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: rgb(245, 245, 245);
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgb(205, 205, 205);
      border-radius: 20px;
      background-color: rgb(205, 205, 205);
    }
  }
`;
const SectionOpenCart = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(176, 176, 176, 0.3);

  @media (min-width: 780px) {
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 255, 255, 0.181);
      transition: 0.3s;
    }
  }
`;
const ImgCart = styled.img`
  width: 80px;
  height: 60px;
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

      <SectionCart value={openCart}>
        {data.redeemHistory.map((product, index) => (
          <SectionOpenCart key={index}>
            <ImgCart alt="" src={product.img.url} />
            <p>{product.name}</p>
            <p></p>
          </SectionOpenCart>
        ))}
      </SectionCart>
    </>
  );
};

export default MenuCart;
