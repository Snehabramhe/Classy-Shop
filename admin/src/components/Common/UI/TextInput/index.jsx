const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon, 
}) => {
  return (
    <div className="w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative mt-1">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border bg-white border-gray-200 rounded-md px-3 py-2 outline-none focus:border-gray-300 ${
            icon ? "pl-10" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default TextInput;