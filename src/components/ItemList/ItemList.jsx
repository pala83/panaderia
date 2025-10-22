import { Item } from "@components/Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ list }) => {
    return (
        <>
            {list.length ? (
                list.map((product) => (
                    <Link key={product.id} to={`/detail/${product.id}`}>
                        <Item {...product} />
                    </Link>
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </>
    );
};
