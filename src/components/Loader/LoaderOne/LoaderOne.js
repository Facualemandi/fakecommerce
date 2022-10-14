import React from "react";
import styled from "styled-components";
import "./LoaderOne.css";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoaderOne = () => {
  return (
    <Div>
      <span className="loader"></span>
    </Div>
  );
};

export default LoaderOne;
