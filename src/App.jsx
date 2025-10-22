import { ItemListContainer } from "@components/ItemListContainer/ItemListContainer";
import { Nav } from "@components/Nav/Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "@contexts/CartContext/CartProvider";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Nav />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
