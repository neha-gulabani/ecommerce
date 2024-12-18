import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import lipstickImage from '../assets/lipstick.png';
import lipstickImage2 from '../assets/lipstick2.png'

const Hero = () => {
    const [selectedSize, setSelectedSize] = useState('9.5');
    const [currentSlide, setCurrentSlide] = useState(0);
    const sizes = ['8.5', '9', '9.5', '10', '10.5', '11'];

    const banners = [banner1, banner2, banner3];
    const titles = [
        { name: 'Lipstick', brand: 'Loreal', image: lipstickImage },
        { name: 'Lipstick', brand: 'Maybelline', image: lipstickImage2 },
        { name: 'Lipstick', brand: 'Chanel', image: lipstickImage2 },
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="relative h-screen max-h-[600px] bg-gray-100 overflow-hidden">

            <div className="absolute inset-0">
                <div
                    className="relative w-full h-full flex transition-transform duration-1000"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {banners.map((banner, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <Image
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                width={1200}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className="relative container mx-auto px-4 pt-8">

                <div className="flex justify-end space-x-1 mb-4">
                    {[0, 1, 2].map((dot) => (
                        <div
                            key={dot}
                            onClick={() => setCurrentSlide(dot)}
                            className={`w-2 h-2 rounded-full cursor-pointer ${dot === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
                        ></div>
                    ))}
                </div>


                <h1 className="text-6xl font-bold mb-4 transition-all duration-500">
                    {titles[currentSlide].name}
                    <br />
                    {titles[currentSlide].brand}
                </h1>


                <div className="flex items-center mb-6">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">Highly Rated</span>
                </div>


                <div className="relative transition-all duration-500">
                    <div className="w-full sm:w-1/2 max-w-2xl mx-auto transform sm:-rotate-12 hover:rotate-0 transition-transform duration-500 sm:translate-y-[-90px] sm:translate-x-[-140px] translate-y-[-50px] sm:hover:translate-y-[-120px] sm:hover:translate-x-[-160px] hover:translate-x-[-40px] hover:translate-y-[-60px]">
                        <Image
                            src={titles[currentSlide].image}
                            alt="Lipstick"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>



                    <div className="absolute top-0 left-4 bg-white px-3 py-1 rounded-full">
                        <span className="text-red-500 font-semibold">-35%</span>
                    </div>


                    <button className="absolute top-10 left-4 p-2 bg-white rounded-full shadow-md">
                        <Heart className="w-6 h-6 text-gray-600" />
                    </button>
                </div>


                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">Select Size</p>
                        <div className="flex space-x-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-full ${selectedSize === size
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-white text-gray-800'
                                        } flex items-center justify-center shadow-md`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-3xl font-bold">$146.25</p>
                        <button className="mt-2 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                            Add To Bag
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;