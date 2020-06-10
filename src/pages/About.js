import React, {useContext} from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import {UserContext} from "../UserContext";


const AboutPage = (props) =>{
    const [api, setApi, pageInfo] = useContext(UserContext);
    return(
        <div>
            <Hero title={pageInfo.about.title} subtitle={pageInfo.about.subtitle} />

            <Content>
                {pageInfo.about.text}
            </Content>
        </div>
    )
};
export default AboutPage