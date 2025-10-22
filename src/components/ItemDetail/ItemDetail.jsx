import { Item } from "@components/Item/Item";

export const ItemDetail = ({ detail }) => {
    return (
        <Item {...detail}>
            <button type="button">Enviar al carrito</button>
        </Item>
    );
};
