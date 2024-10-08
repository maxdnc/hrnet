import { SelectScrollable } from './Selector';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  options = [],
  placeholder,
  error,
  className,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${error ? 'text-red-400' : ''}`}
      >
        {error ? error : label}
      </label>
      {type === 'select' ? (
        <SelectScrollable
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          id={name}
        />
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full px-4 py-2 bg-indigo-50 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
        />
      )}
    </div>
  );
};

export default FormField;
