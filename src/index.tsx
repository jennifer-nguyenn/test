import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainWallet } from "./screens/MainWallet/MainWallet";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainWallet />
  </StrictMode>,
);
