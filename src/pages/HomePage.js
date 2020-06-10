import React, {useContext, useState} from "react";
import Hero from "../components/Hero";
import CarouselImg from "../components/CarouselImg";
import {UserContext} from "../UserContext";


const HomePage = (props) =>{
    const [api, setApi, pageInfo] = useContext(UserContext);

    return(
        <div>
            <Hero title={pageInfo.home.title} subtitle={pageInfo.home.subtitle} text={pageInfo.home.text}/>
            <CarouselImg/>
        </div>

    )
};
export default HomePage