'use client'

import { useState, useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(12)


  useEffect(() => {
    fetchProducts(12)
  }, [])

  const fetchProducts = async (limit: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`)
      const data = await res.json()
      setProducts(data.products)

      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const loadMore = async () => {
    setLoading(true)
    await fetchProducts(limit + 12)
    setLimit(limit + 12)
  }

  if (loading && products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-gray-600 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8" id="products">
      <ProductGrid products={products} />
      {limit < 100 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Show More'}
          </button>
        </div>
      )}
    </main>
  )
}