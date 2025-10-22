import { ItemList } from "@components/ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <section>
            <h2>¡Bienvenidos a nuestra tienda!</h2>
            <ItemList list={products} />
        </section>
    );
};
