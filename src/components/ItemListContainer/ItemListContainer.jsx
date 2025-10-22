import { ItemList } from '@components/ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams() ?? {};
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

	const normalize = (s) => (s ?? '').toString().trim().toLowerCase();
	const toSingular = (s) => (s.endsWith('s') ? s.slice(0, -1) : s);
	const routeCategory = toSingular(normalize(category));
	const list = routeCategory
		? products.filter(
				(p) => toSingular(normalize(p.category)) === routeCategory,
			)
		: products;

	return (
		<main className="p-4 sm:ml-64">
			<h2>¡Bienvenidos a nuestra tienda!</h2>
			<ItemList list={list} />
		</main>
	);
};
