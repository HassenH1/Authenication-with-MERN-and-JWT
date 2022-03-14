import React from "react";

/**
 *
 * Reusable Textinput
 *
 * @example <TextInput label="..." value="..." onChange={() => {}} />
 * @property {string} label
 * @property {string} label
 * @property {function} onChange
 * @property {string} placeholder
 * @property {string} type
 * @returns {React.ReactNode}
 */

function TextInput(props) {
  const { label, value, onChange, placeholder, type = "text" } = props;
  return (
    <div className="form-floating flex-grow-1">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default TextInput;
