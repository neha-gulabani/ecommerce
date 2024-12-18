import Link from 'next/link';
import { Star } from 'lucide-react';


export default function ProductCard({ product }: { product: any }) {

    return (
        <div className="min-h-[300px] flex flex-col justify-between max-w-xs rounded-lg border border-gray-200 shadow-lg overflow-hidden">
            <img
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            className={`w-5 h-5 ${index < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                                }`}
                        />
                    ))}
                </div>
                <span className="text-gray-600">({product.rating})</span>
            </div>
            <Link href={`/products/${product.id}`}>
                <button className="mb-2 ml-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black">
                    View Details
                </button>
            </Link>
        </div>
    );
}
