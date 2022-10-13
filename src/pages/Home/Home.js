import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import { helpHttp } from "../../helper/helphttps";

const Home = () => {
  const [value, setValue] = useState('');

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

  const { data, status } = useQuery(["products"], getProducts);

  if (status === "loading") {
    return <p>cargango</p>;
  } else {
    console.log(data);
  }
  

  const searchProduct = data.filter(obj => obj.name.toLowerCase().includes(value.toLowerCase()) || obj.category.toLowerCase().includes(value.toLowerCase())  );

  return (
    <main>
      <Search setValue={setValue}/>
      <Products searchProduct={searchProduct}/>
    </main>
  );
};

export default Home;
