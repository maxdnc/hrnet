const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full bg-indigo-50 px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {options.map((option) => (
            <option
              key={option.abbreviation || option.value}
              value={option.abbreviation || option.value}
            >
              {option.name || option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full px-4 py-2 bg-indigo-50 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      )}
    </div>
  );
};

export default FormField;
