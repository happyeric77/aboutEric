import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import {UserContext} from "./UserContext";
import axios from "axios";


function App() {

    useEffect(()=>{
        axios.get('https://personal-porfolio.herokuapp.com/api/v2/pages/3/')
            .then(res=>{
                const updatedAppInfo = {
                    ...pageInfo,
                    title: res.data.title,
                    domain: res.data.domain,
                    twitter: res.data.twitter,
                    github: res.data.github,
                    background: res.data.background,
                    jumbotron: res.data.jumbotron,
                    headerLink:[
                        {title: res.data.homePageName, path:"/"},
                        {title: res.data.aboutPageName, path:"/about"},
                        {title: res.data.contactPageName, path:"/contact"}
                    ],
                    home: {
                        title: res.data.homePageTitle,
                        subtitle: res.data.homePageSubtitle,
                        text: res.data.homePageText,
                    },
                    about: {
                        title: res.data.aboutPageTitle,
                        subtitle: res.data.aboutPageSubtitle,
                        text: res.data.aboutPageText,
                    },
                    contact: {
                        title: res.data.contactPageTitle,
                        subtitle: res.data.contactPageSubtitle,
                        text: res.data.contactPageText,
                    },
                };
                setPageInfo(updatedAppInfo)
            })
    },[]);

    const [pageInfo, setPageInfo] = useState({
        title: null,
        domain: null,
        twitter: null,
        github: null,
        background: {
            id: null,
            meta: {
                type: null,
                detail_url: null,
                download_url: null
            },
            title: null
        },
        jumbotron: {
            id: null,
            meta: {
                type: null,
                detail_url: null,
                download_url: null,
            },
            title: null
        },
        headerLink: [
            {title: null},
            {title: null},
            {title: null}
        ],
        home: {
            title: null,
            subtitle: null,
            text: null,
        },
        about: {
            title: null,
            subtitle: null,
            text: null,
        },
        contact: {
            title: null,
            subtitle: null,
            text: null,
        },
    });

    const [api, setApi] = useState({items:[]});


    return (
        <div className='jumbotron p-0 m-0 text-white' style={{"background-image": `url(${pageInfo.background !== null ? pageInfo.domain + pageInfo.background.meta.download_url: "https://res.cloudinary.com/dydozrxhz/image/upload/v1591863327/media/images/pc-watch-mouse-dark_s0nebp.max-165x165_ifafid.jpg"})`, "background-repeat": "no-repeat", "background-position": "center", "background-size": "cover"}}>
        <UserContext.Provider value={[api, setApi, pageInfo]}>
            <Router>

                <nav className="navbar navbar-expand-lg navbar-dark border-bottom fixed-top bg-dark" style={{"opacity": "0.9"}}>
                    <a className="navbar-brand" href="#">{pageInfo.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path='/' exact component={HomePage}/>
                <Route path='/about' exact component={AboutPage}/>
                <Route path='/contact' exact component={ContactPage}/>

                <Footer/>

            </Router>
        </UserContext.Provider>

         </div>
    );
}

export default App;
