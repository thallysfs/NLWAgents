import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCliente = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
