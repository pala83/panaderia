import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const exists = (id) => {
		const exist = cart.some((item) => item.id === id);
		return exist;
	};

	const addItem = (item) => {
		if (exists(item.id)) {
			alert('El producto ya está en el carrito');
			return;
		}
		setCart([...cart, item]);
		alert(`Se agregó ${item.name} al carrito`);
	};

	const clearCart = () => {
		setCart([]);
	};

	const getTotalItems = () => {
		if (cart.length) return cart.length;
	};

	const values = { cart, addItem, clearCart, getTotalItems };

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
