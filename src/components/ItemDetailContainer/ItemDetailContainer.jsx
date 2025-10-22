import { ItemDetail } from "@components/ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                const product = data.find(
                    (item) => item.id === parseInt(id, 10)
                );
                if (!product) throw new Error("Product not found");
                setDetail(product);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }, [id]);

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Loading product details...</p>
            )}
        </main>
    );
};
