import React from "react";
import styled from "styled-components";
import "./LoaderCoin.css";


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
margin-bottom: 30px;
`
const LoaderCoin = () => {
  return (
    <Div>
      <span className="loaderSpin"></span>
    </Div>
  );
};

export default LoaderCoin;
