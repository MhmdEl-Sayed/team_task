import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from './component/redux/store.js'
import { Provider } from 'react-redux'
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <App />
    </Provider>
  </StrictMode>
);
