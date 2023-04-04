import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div>
          <FaqItem
            question="What is your product or service?"
            answer="Our product or service is a brief explanation of what we offer."
          />
          <FaqItem
            question="How does your product or service work?"
            answer="Our product or service works by providing detailed information on how it functions."
          />
          {/* Add more FAQ items here */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
