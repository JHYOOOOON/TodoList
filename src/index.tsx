import * as ReactDOMClient from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
