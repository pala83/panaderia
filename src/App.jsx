import { ItemDetailContainer } from '@components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '@components/ItemListContainer/ItemListContainer';
import { Nav } from '@components/Nav/Nav';
import { CartProvider } from '@contexts/CartContext/CartProvider';
import { ToastProvider } from '@contexts/ToastContext/ToastProvider';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<ToastProvider>
				<CartProvider>
					<Nav />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/category/:category" element={<ItemListContainer />} />
						<Route path="/detail/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<h2>Cart Page</h2>} />
						<Route path="*" element={<h2>404 Not Found</h2>} />
					</Routes>
				</CartProvider>
			</ToastProvider>
		</BrowserRouter>
	);
}

export default App;
