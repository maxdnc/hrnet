const PrimaryButton = ({ type, label }) => {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {label}
    </button>
  );
};
export default PrimaryButton;
