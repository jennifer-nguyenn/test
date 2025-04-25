import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/global.css';
import './styles/overrides.css';
import './styles/iphone-mock.css';
import { StrictMode } from "react";
import { MainWallet } from "./screens/MainWallet/MainWallet";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <MainWallet />
  </StrictMode>
);
