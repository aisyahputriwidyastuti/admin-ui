import React from 'react';
import Card from '../components/Elements/Card';

const Expenses = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-gray-700 text-2xl mb-6">Expenses Comparison</div>
      <Card
        title="Expenses Comparison"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
        variant="shadow-lg mb-6"
      />

      {/* Expenses Breakdown Section */}
      <div className="text-gray-700 text-2xl mb-4">Expenses Breakdown</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Expense 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
          variant="shadow-lg"
        />
        <Card
          title="Expense 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
          variant="shadow-lg"
        />
        <Card
          title="Expense 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
          variant="shadow-lg"
        />
        <Card
          title="Expense 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
          variant="shadow-lg"
        />
        <Card
          title="Expense 5"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus."
          variant="shadow-lg"
        />
      </div>
    </div>
  );
};

export default Expenses;
