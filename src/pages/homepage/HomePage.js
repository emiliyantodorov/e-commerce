import React from "react";
import "./homepage.scss";
import Section from "../../components/Section/Section";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu";

const HomePage = ({history}) => {
    console.log(history);
    return (
        <div className="home-page">
            <Section cName={"section-directory-menu"}>
                <DirectoryMenu/>
            </Section>
        </div>
    )
}

export default HomePage