import React, { useState } from "react";
import ViewForm from "./ViewForm";

const SelectField = () => {
  const [fieldType, setFieldType] = useState("");
  const [values, setValues] = useState({});
  const [fields, setFields] = useState([]);
  const [isSelect, setSelect] = useState(false);
  const [options, setOptionValues] = useState([{ value: "" }]);
  const [selectOptions, setOptions] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleFieldTypeChange = (event) => {
    setFieldType(event.target.value);

    if (event.target.value === "select") {
      setSelect(true);
    } else {
      setSelect(false);
    }
    console.log(fields);
  };

  const handleAddField = () => {
    setFields([...fields, { type: fieldType }]);
    console.log(options);
  };
  const handleAddOptions = () => {
    setOptions([...selectOptions, { value: options }]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Value", values);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleOptionChange = (e) => {
    setOptionValues([...options, { value: e.target.value }]);
  };
  return (
    <>
      {isSubmitted === false ? (
        <div>
          <label>Field Type:</label>
          <select value={fieldType} onChange={handleFieldTypeChange}>
            <option value="text">Select a field type</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="textarea ">Text Area</option>
            <option value="select">select</option>
          </select>
          {isSelect ? (
            <div>
              {selectOptions.map((option, index) => (
                <div key={index}>
                  <label>{"Option " + (index + 1)}</label>
                  <input
                    type="text"
                    name={"Option " + (index + 1)}
                    onChange={handleOptionChange}
                  />
                </div>
              ))}
              <button onClick={handleAddOptions}>Add options</button>
            </div>
          ) : (
            <></>
          )}
          <button onClick={handleAddField}>Add Field</button>
          <form onSubmit={handleSubmit}>
            <ul>
              {fields.map((field, index) => (
                <div key={index}>
                  <label>{field.type}</label>
                  {field.type !== "select" ? (
                    <input
                      type={field.type}
                      name={field.type}
                      onChange={handleChange}
                    />
                  ) : (
                    <select
                      type={field.type}
                      name={field.type + index}
                      onChange={handleChange}
                    >
                      {options.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </ul>
            <button type="submit">Create Form</button>
          </form>
        </div>
      ) : (
        <ViewForm values={values} />
      )}
    </>
  );
};

export default SelectField;
