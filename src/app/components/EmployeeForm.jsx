'use client';
import { useState } from 'react';
import FormField from './FormField.jsx';
import { STATES } from '../constants/state.js';
import { DEPARTMENTS } from '../constants/departments.js';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <FormField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <FormField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      {/* Nous gardons les champs de date tels quels pour l'instant */}
      <div className="mb-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <fieldset className="mb-4 border p-4">
        <legend className="block text-sm font-medium text-gray-700">
          Address
        </legend>
        <div className="mt-2 space-y-4">
          <FormField
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          <FormField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <FormField
            label="State"
            name="state"
            type="select"
            value={formData.state}
            onChange={handleChange}
            options={STATES}
          />
          <FormField
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <FormField
        label="Department"
        name="department"
        type="select"
        value={formData.department}
        onChange={handleChange}
        options={DEPARTMENTS}
      />
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
