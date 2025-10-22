import { ItemDetailContainer } from '@components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '@components/ItemListContainer/ItemListContainer';
import { Nav } from '@components/Nav/Nav';
import { CartProvider } from '@contexts/CartContext/CartProvider';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/detail/:id" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
