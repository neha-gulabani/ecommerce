import React from 'react';
import Navbar from '../../components/Navbar';

const Support = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Support</h1>
                <p className="text-lg text-gray-700">
                    Need help? We're here for you! If you have any questions or issues with your order, please feel free to contact our support team.
                    You can reach us through email or live chat, and we’ll get back to you as soon as possible.
                </p>
                <h2 className="text-2xl font-bold mt-6">Contact Information</h2>
                <ul className="list-disc pl-5 mt-4">
                    <li>Email: support@shoply.com</li>
                    <li>Phone: 1-800-123-4567</li>
                </ul>
            </div>
        </>
    );
};

export default Support;
