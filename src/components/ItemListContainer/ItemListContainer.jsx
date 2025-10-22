import { ItemList } from '@components/ItemList/ItemList';
import { useEffect, useState } from 'react';

export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const base = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_BASE;
		fetch(`${base}/products`)
			.then((response) => {
				if (!response.ok) throw new Error('Network response was not ok');
				return response.json();
			})
			.then((data) => setProducts(data))
			.catch((error) => console.error('Error fetching products:', error));
	}, []);

	return (
		<main className="p-4 sm:ml-64">
			<h2>¡Bienvenidos a nuestra tienda!</h2>
			<ItemList list={products} />
		</main>
	);
};
