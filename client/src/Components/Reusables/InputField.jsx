import React from "react";

const InputField = ({ type, placeholder, name, value, changeEvent }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={changeEvent}
      className="w-full px-3 py-1 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
    />
  );
};

export default InputField;
