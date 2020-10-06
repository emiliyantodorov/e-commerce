import React from "react";
import "./section.scss"

const Section = ({cName, children, id})=> {
    return (
        <section key={id} className={cName}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default Section;
