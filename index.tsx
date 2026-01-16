import React from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./src-ts/app/layout";
import Home from "./src-ts/app/page";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RootLayout>
        <Home />
      </RootLayout>
    </React.StrictMode>
  );
}
