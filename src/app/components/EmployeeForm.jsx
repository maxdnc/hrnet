'use client';
import { useState } from 'react';
import FormField from './FormField.jsx';
import { STATES } from '../constants/state.js';
import { DEPARTMENTS } from '../constants/departments.js';
import { DatePicker } from './DatePicker.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import useFormStore from '../store/useFormStore.js';
import useEmployeeStore from '../store/useEmployeeStore.js';
import { validateEmployeeForm, isFormValid } from '../utils/formValidation';
import { RotateCcw } from 'lucide-react';
import { Modal } from 'maxime-component-modal';

const EmployeeForm = () => {
  const { formData, setFormData, resetFormData } = useFormStore();
  const { addEmployee } = useEmployeeStore();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState('');

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(name, value);
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validateEmployeeForm(formData);
    setErrors(newErrors);
    if (isFormValid(newErrors)) {
      setEmployeeName(formData.firstName); // Store the employee's name
      setIsModalOpen(true);
      addEmployee(formData);
      resetFormData();
      setErrors({});
    }
    setIsLoading(false);
  };

  const handleReset = () => {
    resetFormData();
    setErrors({});
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg"
      >
        <FormField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <DatePicker
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
        />
        <DatePicker
          label="Start Date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          error={errors.startDate}
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
              error={errors.street}
            />
            <FormField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
            />
            <FormField
              label="State"
              name="state"
              type="select"
              value={formData.state}
              onChange={handleChange}
              options={STATES}
              placeholder="Select a state"
              error={errors.state}
            />
            <FormField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
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
          error={errors.department}
        />
        <div className="mt-6 flex gap-4 ">
          <PrimaryButton
            type="submit"
            label={isLoading ? 'Saving...' : 'Save'}
            className={'w-full'}
          />
          <PrimaryButton
            type="button"
            label="Reset"
            className={'flex-none'}
            variant={'outline'}
            icon={<RotateCcw size={22} />}
            onClick={handleReset}
          />
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Employee Created !"
        positionTitle="center"
        titleFontColor="#1e1a58"
        borderTitle={true}
        insideBorderColor="#898b8f"
        insideBorderWidth={1}
        backgroundColor="#1e1a58"
        backgroundOpacity={70}
        modalMaxWidth="600px"
        modalBackgroundColor="#EEF2FF"
        modalBorderColor="#a3a3ad"
        modalBorderWidth={1}
        modalBorderRadius={22}
        closeColor="#898b8f"
        blurAmount={5}
      >
        <p className="text-neutral-500 text-center my-8">
          Employee{' '}
          <span className="font-bold text-indigo-500 capitalize">
            {employeeName}
          </span>{' '}
          has been successfully added to the list.{' '}
          <span aria-label="celebration" role="img">
            🎉
          </span>
        </p>
      </Modal>
    </>
  );
};

export default EmployeeForm;
