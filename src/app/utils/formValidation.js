export const validateEmployeeForm = (formData) => {
  let errors = {};

  if (!formData.firstName.trim()) errors.firstName = 'First name is required';
  if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
  if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
  if (!formData.startDate) errors.startDate = 'Start date is required';
  if (!formData.street.trim()) errors.street = 'Street is required';
  if (!formData.city.trim()) errors.city = 'City is required';
  if (!formData.state) errors.state = 'State is required';
  if (!formData.zipCode.trim()) errors.zipCode = 'Zip code is required';
  if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode))
    errors.zipCode = 'Invalid zip code format';
  if (!formData.department) errors.department = 'Department is required';

  return errors;
};

export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0;
};
