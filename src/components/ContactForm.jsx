import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.mail.trim() || !/\S+@\S+\.\S+/.test(form.mail))
      newErrors.mail = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone))
      newErrors.phone = "10-digit phone required";
    if (!form.budget) newErrors.budget = "Select a budget";
    if (!form.description.trim()) newErrors.description = "Required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);

    setForm({
      firstName: "",
      lastName: "",
      mail: "",
      phone: "",
      budget: "",
      description: "",
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="contact"  style={{scrollMarginTop:75}}>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Mail</label>
            <input
              type="email"
              name="mail"
              value={form.mail}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            {errors.mail && (
              <p className="text-xs text-red-500">{errors.mail}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Budget</label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
            >
              <option value="">Select Budget</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.budget && (
              <p className="text-xs text-red-500">{errors.budget}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            {errors.description && (
              <p className="text-xs text-red-500">{errors.description}</p>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-10 rounded-full transition duration-200"
          >
            Submit
          </button>
        </div>

        {submitted && (
          <p className="text-green-600 text-center mt-4">
            Form submitted successfully!
          </p>
        )}
      </form>
    </section>
  );
}
