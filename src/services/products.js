const base = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_BASE;
const BASE_URL = `${base}/products`;

export const createProduct = async (product) => {
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(product),
	});
	if (!res.ok) {
		throw new Error('Error creating product');
	}
	const data = await res.json();
	return data;
};

export const getProducts = async () => {
	const res = await fetch(BASE_URL);
	if (!res.ok) {
		throw new Error('Error fetching products');
	}
	const data = await res.json();
	return data;
};
