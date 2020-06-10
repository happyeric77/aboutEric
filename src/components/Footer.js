import React, {useContext} from "react";
import {UserContext} from "../UserContext";

const Footer = () => {
    const [api, setApi, pageInfo] = useContext(UserContext);
    return(
        <footer className='mt-5'>
            <div className='container-fluid'>
                <div className='border-top p-3'>
                    <div className='m-auto inline-block pt-3'>
                        <ul className="list-inline text-center">
                            {pageInfo.twitter && <li className="list-inline-item">
                                <a href={pageInfo.twitter}>
                                    <span className="fa-stack fa-lg">
                                      <i className="fas fa-circle fa-stack-2x"></i>
                                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>}
                            {pageInfo.github && <li className="list-inline-item">
                                <a href={pageInfo.github}>
                                    <span className="fa-stack fa-lg">
                                      <i className="fas fa-circle fa-stack-2x"></i>
                                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>}
                        </ul>
                    </div>
                    <div className='p-0 inline-block text-center'>Copyright © KNWLBox 2020 | Designer Eric Lee</div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
