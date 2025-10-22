export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <article>
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            {children}
        </article>
    );
};
