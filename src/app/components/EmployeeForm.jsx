'use client';
import { useState } from 'react';
import FormField from './FormField.jsx';
import { STATES } from '../constants/state.js';
import { DEPARTMENTS } from '../constants/departments.js';
import { DatePicker } from './DatePicker.jsx';
import PrimaryButton from './PrimaryButton.jsx';

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

      <DatePicker
        label="Date of Birth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />
      <DatePicker
        label="Start Date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />

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
            placeholder="Select a state"
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
        placeholder="Select a department"
      />
      <div className="mt-6">
        <PrimaryButton type="submit" label="Save" />
      </div>
    </form>
  );
};

export default EmployeeForm;
