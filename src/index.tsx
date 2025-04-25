import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/global.css';
import { StrictMode } from "react";
import { MainWallet } from "./screens/MainWallet/MainWallet";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainWallet />
  </StrictMode>,
);
