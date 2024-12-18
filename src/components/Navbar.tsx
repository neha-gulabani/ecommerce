'use client'

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const isProductPage = pathname.startsWith('/products');

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">

                <Link href="/" className="text-xl font-bold text-gray-800">
                    Shoppe
                </Link>


                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/"
                        className={`${pathname === '/' ? 'bg-black text-white' : 'bg-white text-black'
                            } px-8 py-2 rounded-full text-sm font-medium`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/#products"
                        className={`${isProductPage ? 'bg-black text-white' : 'bg-white text-black'
                            } px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-black transition-colors`}
                    >
                        PRODUCTS
                    </Link>
                    <Link
                        href="/about"
                        className={`${pathname === '/about' ? 'bg-black text-white' : 'bg-white text-black'
                            } px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-black transition-colors`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/support"
                        className={`${pathname === '/support' ? 'bg-black text-white' : 'bg-white text-black'
                            } px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 hover:text-black transition-colors`}
                    >
                        SUPPORT
                    </Link>
                </div>


                <div className="bg-white p-2 rounded-full">
                    <ShoppingBag className="w-5 h-5 text-gray-700" />
                </div>


                <button
                    className="md:hidden bg-white p-2 rounded-full"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>


            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md mt-4 rounded-lg">
                    <Link
                        href="/"
                        className={`${pathname === '/' ? 'bg-black text-white' : 'bg-white text-black'
                            } block px-8 py-2 rounded-full text-sm font-medium`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="#products"
                        className={`${isProductPage ? 'bg-black text-white' : 'bg-white text-black'
                            } block px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors`}
                    >
                        PRODUCTS
                    </Link>
                    <Link
                        href="/about"
                        className={`${pathname === '/about' ? 'bg-black text-white' : 'bg-white text-black'
                            } block px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/support"
                        className={`${pathname === '/support' ? 'bg-black text-white' : 'bg-white text-black'
                            } block px-8 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors`}
                    >
                        SUPPORT
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
