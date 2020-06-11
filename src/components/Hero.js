import React, {useContext} from "react";
import {UserContext} from "../UserContext";
import parse from 'html-react-parser';

const Hero = (props) => {
    const [api, setApi, pageInfo] = useContext(UserContext);
    return(
        <div className='jumbotron container-fluid' style={{"background-image": `url(${pageInfo.jumbotron !== null ? pageInfo.domain + pageInfo.jumbotron.meta.download_url: "https://res.cloudinary.com/dydozrxhz/image/upload/v1591863195/media/images/jumbo-blue_jrgket.original_faeqpg.jpg"})`, "background-repeat": "no-repeat", "background-position": "center", "background-size": "cover"}}>
            <div className="text-white py-5 px-4 row justify-content-center">

                {props.title && <div className='h1 mb-5 col-12 text-center'> {props.title}</div> }
                <div className='col-8'>
                    {props.subtitle && <div className='h4'> {props.subtitle}</div>}
                    {props.text && <div className='h5'> {parse(''+props.text)}</div>}
                </div>

            </div>
        </div>
    )
};
export default Hero