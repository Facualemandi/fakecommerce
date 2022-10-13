import { useQuery } from "@tanstack/react-query";
import React from "react";
import { helpHttp } from "../../helper/helphttps";

const Home = () => {
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
    return response;
  };

  const { data, status } = useQuery(["products"], getProducts);

  if (status === "loading") {
    return <p>cargango</p>;
  } else {
    console.log(data);
  }

  return (
    <main>
      <p>Facu</p>
    </main>
  );
};

export default Home;
