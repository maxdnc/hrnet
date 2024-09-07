const PrimaryButton = ({ type, label, className, onClick, icon, variant }) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const filledClasses =
    'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
  const outlineClasses =
    'border border-indigo-600 text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-500';

  const variantClasses = variant === 'outline' ? outlineClasses : filledClasses;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {icon ? <span>{icon}</span> : null}
      <span>{label}</span>
    </button>
  );
};

export default PrimaryButton;
