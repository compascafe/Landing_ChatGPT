import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-32 text-center">
      <h1 className="text-4xl font-bold text-black">Your Amazing Product</h1>
      <p className="text-xl text-black mt-4">A brief description of your product or service.</p>
      <div className="mt-8">
        <form className="bg-gray-100 p-6 rounded shadow-md max-w-lg mx-auto">
          <p className="mb-4">Sign up for more information:</p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
