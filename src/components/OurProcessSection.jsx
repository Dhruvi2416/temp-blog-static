import React from 'react';

const steps = [
  {
    title: 'Step 1',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    image: '/assets/step1.png',
  },
  {
    title: 'Step 2',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    image: '/assets/step2.png',
  },
  {
    title: 'Step 3',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    image: '/assets/step3.png',
  },
];

export default function OurProcessSection() {
  return (
    <section className="w-full py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {steps.map((step, index) => (
            <div key={index} className="text-center max-w-sm">
              <img
                src={step.image}
                alt={step.title}
                className="w-64 h-64 object-contain mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
