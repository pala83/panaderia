import { Item } from '@components/Item/Item';
import { Link } from 'react-router-dom';

export const ItemList = ({ list }) => {
	return (
		<div className="w-full px-4 py-6">
			{list.length ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{list.map((product) => (
						<Link
							key={product.id}
							to={`/detail/${product.id}`}
							className="block"
						>
							<Item {...product} />
						</Link>
					))}
				</div>
			) : (
				<p className="text-center text-gray-500">
					No hay productos disponibles
				</p>
			)}
		</div>
	);
};
