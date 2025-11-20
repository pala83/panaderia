import { Count } from '@components/Count/Count';
import { Item } from '@components/Item/Item';
import { useCartContext } from '@contexts/CartContext/useCartContext';

export const ItemDetail = ({ detail }) => {
	const { addItem } = useCartContext();

	const handleAddToCart = (quantity) => {
		addItem({ ...detail, quantity });
	};

	return (
		<Item {...detail}>
			{/* 
			<button
				type="button"
				onClick={() => addItem(detail)}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Enviar al carrito
			</button>
			 */}
			<Count
				btnText="Add to Cart"
				stock={detail.stock}
				initial={1}
				onConfirm={handleAddToCart}
			></Count>
		</Item>
	);
};
