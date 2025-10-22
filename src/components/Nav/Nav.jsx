import { useCartContext } from "@contexts/CartContext/useCartContext";
import { Link } from "react-router-dom";

export const Nav = () => {
    const { getTotalItems } = useCartContext();
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/dulce"}>Dulce</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Salado</Link>
                </li>
                <li>
                    <Link>Cart ({getTotalItems()})</Link>
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};
