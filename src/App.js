import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import { ContextProvider } from "./context/context";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
