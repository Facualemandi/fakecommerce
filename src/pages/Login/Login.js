import React from "react";
import styled from "styled-components";
import Fondo from "../../images/fondo.png";

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: #6fddf1;
`;
const Container = styled.section`
  position: relative;
  z-index: 300;
  max-width: 600px;
  padding: 15px;
  margin: auto;
  background-color: #eca5fd82;
  border-radius: 15px;
  width: 90vw;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.254);
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const SectionLogIn = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: #52abff45;
  color: white;

  label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: "Roboto", sans-serif;
  }
`;

const SectionButtons = styled.section`
  display: flex;
  margin-top: 15px;

  button {
    width: 100%;
    padding: 20px;
    margin: 5px;
    border-radius: 5px;
    border: none;
    background-color: rgba(23, 23, 23, 0.723);
    color: white;
  }
`;

const SectionRegister = styled.section`
  display: flex;
  flex-direction: column;

  button {
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
  }
`;

const Login = () => {
  return (
    <Main>
      <Container>
        <SectionLogIn>
          <label>Email</label>
          <Input placeholder="Email" />
          <label>Pasasword</label>
          <Input placeholder="Contraseña" />

          <SectionButtons>
            <button>Google</button>
            <button>Ingresar</button>
          </SectionButtons>
        </SectionLogIn>

        <SectionRegister>
          <button>Registrarse</button>
          <button>Invitado</button>
        </SectionRegister>
      </Container>
    </Main>
  );
};

export default Login;
