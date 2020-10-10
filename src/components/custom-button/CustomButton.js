import React from "react";

const CustomButton = ({children,type, cName, clickHandler})=> {
    return (
        <button
            type={type}
            className={cName}
            onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default CustomButton;