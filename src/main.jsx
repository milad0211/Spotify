import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Player from "./components/Player.jsx";
import PlayerContextProvider from "./contex/PlayerContex.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
