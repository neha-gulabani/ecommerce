
'use client';

import { useState } from 'react';

const ProductDetailImages = ({ product }: { product: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product.images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < product.images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
                {product.images.map((image: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    >
                        <img
                            src={image}
                            alt={`${product.title} - View ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>


            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                    onClick={handlePrevImage}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 text-black rounded-md ml-4"
                    onClick={handleNextImage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductDetailImages;
