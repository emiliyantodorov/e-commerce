import React from "react";

import "./input-field.scss";

const InputField = ({label, id, name, type, value, handleChange}) => (
    <div className="field">
        {
            label ? (
                    <label htmlFor={id}>{label}</label>
                ) :
                null
        }
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
        />
    </div>
)

export default InputField;