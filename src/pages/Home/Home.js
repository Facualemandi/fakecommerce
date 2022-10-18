import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoaderOne from "../../components/Loader/LoaderOne/LoaderOne";
import MenuCart from "../../components/MenuCart/MenuCart";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import Select from "../../components/Select/Select";
import { helpHttp } from "../../helper/helphttps";
import Aerolab from "../../images/aerolab.png";

const Main = styled.main`
  background-color: rgb(250, 250, 250);
`;

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
  z-index: 120;
  color: white;
`;
const DivImg = styled.div`
  height: auto;
  position: relative;
`;

const Container = styled.section`
  @media (min-width: 780px) {
    display: flex;
    justify-content: center;
    width: 780px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;
const Home = () => {
  const [value, setValue] = useState("");
  const [LowestProducts, setLowestProducts] = useState([]);
  const [valueSelect, setValueSelect] = useState("");

  const API_URL = "https://coding-challenge-api.aerolab.co/products";

  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  const getProducts = async () => {
    const response = await Promise.all([helpHttp().get(API_URL, options)]);
    return response[0];
  };

  const { data, status } = useQuery(["products"], getProducts, {
    enabled: true,
  });

  let searchProduct;

  useEffect(() => {
    if (valueSelect === "Lowest") {
      const Lowest = searchProduct.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1;
        }
        if (a.cost > b.cost) {
          return 1;
        }
        return 0;
      });
      return setLowestProducts(Lowest);
    }
    if (valueSelect === "Highest") {
      const Highest = searchProduct.sort((a, b) => {
        if (a.cost > b.cost) {
          return -1;
        }
        if (a.cost < b.cost) {
          return 1;
        }
        return 0;
      });
      return setLowestProducts(Highest);
    }
  }, [valueSelect, LowestProducts.length]);

  if (status === "loading") {
    return <LoaderOne />;
  }

  if (LowestProducts.length === 0) {
    searchProduct = data.filter(
      (obj) =>
        obj.name.toLowerCase().includes(value.toLowerCase()) ||
        obj.category.toLowerCase().includes(value.toLowerCase())
    );
  } else {
    searchProduct = LowestProducts.filter(
      (obj) =>
        obj.name.toLowerCase().includes(value.toLowerCase()) ||
        obj.category.toLowerCase().includes(value.toLowerCase())
    );
  }

  return (
    <Main>
      <DivImg>
        <Img alt="aerolab" src={Aerolab} />
        <P>Electronics</P>
      </DivImg>

      <Search
        setValue={setValue}
        setValueSelect={setValueSelect}
        value={value}
      />

      <Container>
        <Select
          setValue={setValue}
          LowestProducts={LowestProducts}
          setLowestProducts={setLowestProducts}
        />
        <Products searchProduct={searchProduct} />
      </Container>
      <MenuCart />
    </Main>
  );
};

export default Home;
