import React from 'react'
import ProductCard from './ProductCard'

interface Product {
    id: number
    title: string
    price: number
    image: string
    rating: number
}

interface ProductGridProps {
    products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;
