import Select from "react-select";
import { useField } from "formik";
import React from "react";
export default function SelectField(props) {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = (value) => {
    setValue(value);
  };

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "#424242",
    }),

    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "hsla(291, 64%, 42%, 0.5)"
        : isSelected
        ? "hsla(291, 64%, 42%, 1)"
        : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      backgroundcolor: "#424242",
      zIndex: 100,
    }),
  };
  return (
    <Select
      //className="react-select"
      //classNamePrefix="react-select"
      {...props}
      value={state?.value}
      isMulti
      onChange={onChange}
      onBlur={setTouched}
      styles={colourStyles}
    />
  );
}
