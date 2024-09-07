const PrimaryButton = ({
  type,
  label,
  className,
  onClick,
  icon,
  variant,
  disabled,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer';
  const filledClasses =
    'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
  const outlineClasses =
    'border border-indigo-600 text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-500';
  const textClasses =
    'text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500';
  const disabledClasses =
    'opacity-20 cursor-not-allowed hover:cursor-not-allowed  text-gray-600';

  let variantClasses;
  switch (variant) {
    case 'outline':
      variantClasses = outlineClasses;
      break;
    case 'text':
      variantClasses = textClasses;
      break;
    default:
      variantClasses = filledClasses;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses} ${className} ${disabled ? disabledClasses : ''}`}
      disabled={disabled}
    >
      {icon ? <span>{icon}</span> : null}
      {label ? <span>{label}</span> : null}
    </button>
  );
};

export default PrimaryButton;
