const ToggleSwitch = ({ value, onChange }) => {
  return (
    <div
      onClick={() => onChange(!value)}
      className={`w-12 h-6 flex items-center rounded-full cursor-pointer 
        ${value ? "bg-blue-500" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition
          ${value ? "translate-x-6" : "translate-x-1"}`}
      />
    </div>
  );
};

export default ToggleSwitch;