import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { helpHttp } from "../helper/helphttps";

const theContext = createContext();

export const useTheContext = () => {
  const context = useContext(theContext);
  return context;
};

export function ContextProvider({ children }) {
  const API_USER = "https://coding-challenge-api.aerolab.co/user/me";
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  const getUser = async () => {
    const response = await Promise.all([helpHttp().get(API_USER, options)]);
    return response[0];
  };

  const { data, status, refetch, isFetching } = useQuery(["user"], getUser);

  if (status === "loading") {
    return ;
  }

  return (
    <theContext.Provider value={{ data, refetch, isFetching }}>
      {children}
    </theContext.Provider>
  );
}
