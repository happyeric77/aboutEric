import React, {useContext, useState, useEffect} from "react";
import Hero from "../components/Hero";
import {UserContext} from "../UserContext";
import axios from 'axios';

const ContactPage = (props) =>{

    const [api, setApi, pageInfo] = useContext(UserContext);
    const [state, setState] = useState({
        email: "",
        fullName: "",
        message: "",
        disabled: false,
        emailSent: null,
    });

    const handleChange = (e) => {
        console.log(e.target.id);
        switch (e.target.id){
            case "InputEmail":
                const email = e.target.value;
                setState({
                    ...state,
                    email: email,
                });
                break;
            case "InputFullName":
                const fullName = e.target.value;
                setState({
                    ...state,
                    fullName: fullName,
                });
                break;
            case "InputMessage":
                const message = e.target.value;
                setState({
                    ...state,
                    message: message,
                });
                break;
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (state.email && state.message !== "") {
            axios.post('http://127.0.0.1:8000/api/email/', state)
            .then(res=>{
                console.log(res);
                if (res.data === 'email_sent'){
                    setState({
                        ...state,
                        emailSent: true,
                        disabled: true,
                    })
                } else {
                    setState({
                        ...state,
                        emailSent: false,
                        disabled: true,
                    })
                }
            });
        } else {
            alert('Do not forget to fill in your email address & comment.')
        }

    };

    return(
        <div>
            <Hero title={pageInfo.contact.title} subtitle={pageInfo.contact.subtitle} text={pageInfo.contact.text}/>
            <div className='container px-5 mt-5'>
                <form className='px-3' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email address</label>
                        <input onChange={handleChange} value={state.email} type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputFullName">Full Name</label>
                        <input onChange={handleChange} value={state.fullName} type="fullName" className="form-control" id="InputFullName"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="InputMessage">Message</label>
                        <textarea onChange={handleChange} value={state.message} rows='3' className="form-control" id="InputMessage"/>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={state.disabled}>Send</button>
                    {state.emailSent === true && <div className="mt-1 alert alert-success" role="alert">
                        Email sent!
                    </div>}
                    {state.emailSent === false && <div className="mt-1 alert alert-danger" role="alert">
                        Email not sent!
                    </div>}
                </form>
            </div>
        </div>
    )
};
export default ContactPage