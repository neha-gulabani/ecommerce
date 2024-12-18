import ProductDetailImages from "./ProductDetailImages";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    brand: string;
    category: string;
    images: string[];
}

const fetchProductData = async (id: string): Promise<Product | null> => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {

    const product = await fetchProductData(params.id);

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-gray-600 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductDetailImages product={product} />

                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                        <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    className={`w-5 h-5 ${index < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600">({product.rating})</span>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-gray-900">${product.price}</p>
                        <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Description</h2>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Category</h2>
                        <p className="mt-2 text-gray-600 capitalize">{product.category}</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Add to Cart
                        </button>
                        <button className="w-full py-3 px-8 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
