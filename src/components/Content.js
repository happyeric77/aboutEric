import React from "react";
import parse from 'html-react-parser'

const Content = (props) => {
    return (
        <div className='container mt-5 h5'>
            {parse('' + props.children)}
        </div>
    )
};
export default Content