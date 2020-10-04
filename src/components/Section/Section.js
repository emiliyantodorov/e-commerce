import React from "react";
import "./section.scss"

const Section = ({cName, children})=> {
    return (
        <section className={cName}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default Section;
