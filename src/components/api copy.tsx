import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProdutItem';

type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
}
function Api() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const abortController = new AbortController();

        const loadProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://72ced2f2-d9dc-48d5-b3d2-d778b161aa65-00-a256fqssrjq8.pike.replit.dev/courses`,
                    { signal: abortController.signal }
                );

                setProducts(response.data);
                setError("");
            } catch (error) {
                setError("Something went wrong.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();

        return () => abortController.abort();
    }, []);

    return (
        <div>
            
                <div>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} /> // ส่งข้อมูล product ไปยัง ProductItem ผ่าน props
                    ))}
                </div>
            
        </div>
    );
}

export default Api;
