import React from "react";

const services = [
  {
    title: "Audit & Account",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/audit.png",
  },
  {
    title: "Budget & Projections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/budget.png",
  },
  {
    title: "Payroll & Bookkeeping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/payroll.png",
  },
  {
    title: "Software Training & IT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/software.png",
  },
  {
    title: "Tax Planning & Returns",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/tax.png",
  },
  {
    title: "Management Information",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/assets/icons/management.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white" id="services"  >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center lg:text-left">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
