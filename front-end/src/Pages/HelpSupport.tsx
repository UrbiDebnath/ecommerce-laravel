import React from "react";

const HelpSupport: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">Help & Support</h1>
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <details className="p-4 border rounded-lg">
                    <summary className="cursor-pointer font-medium">How do I track my order?</summary>
                    <p className="mt-2 text-gray-600">You can track your order by logging into your account and navigating to the 'Orders' section.</p>
                </details>
                <details className="p-4 border rounded-lg">
                    <summary className="cursor-pointer font-medium">What is the return policy?</summary>
                    <p className="mt-2 text-gray-600">You can return items within 30 days of purchase. Make sure the item is in original condition.</p>
                </details>
                <details className="p-4 border rounded-lg">
                    <summary className="cursor-pointer font-medium">How can I contact support?</summary>
                    <p className="mt-2 text-gray-600">You can contact us via email at support@example.com or call us at (123) 456-7890.</p>
                </details>
            </div>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <form className="space-y-4">
                <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <textarea 
                placeholder="Your Message" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}>
                </textarea>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
};

export default HelpSupport;
