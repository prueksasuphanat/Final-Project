import React from 'react';

type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
}

type ProductItemProps = {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            
        </div>
    );
}

export default ProductItem;
