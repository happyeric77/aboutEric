import React, {useContext, useEffect} from "react";
import CarouselDetail from "./CarouselDetail";
import {UserContext} from "../UserContext";
import axios from 'axios';

const CarouselImg = (props) => {
    const [api, setApi, pageInfo] = useContext(UserContext);


    useEffect(()=>{
        axios.get('https://personal-porfolio.herokuapp.com/api/v2/pages/3/')
            .then(res=>{
                const newApi = {...api, items: res.data.childPages};
                setApi(newApi);
            }).catch(err=>console.log(err))
    }, []);

    const handleSelect = (e, item)=> {
        const newItems = [];
        api.items.forEach(elem => {
            if (elem.id === item.id) {

                newItems.push({...elem, selected: true})
            } else {
                newItems.push({...elem, selected: false})
            }
        });
        setApi({items: newItems});

        setTimeout(()=>{window.scrollTo({
          top: document.documentElement.scrollTop+500,
          left: 0,
          behavior: 'smooth'
        })}, 100)

    };

    return(
        <div className='container p-0'>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {api.items.map(item=>{
                        return <li data-target="#carouselExampleCaptions" data-slide-to={item.id}></li>
                    })}
                </ol>
                <div className="carousel-inner">
                    {api.items.map(item=>{
                        if (item.id === api.items[0].id){
                            return(
                                <div className="carousel-item active" onClick={(e)=>{handleSelect(e, item)}}>
                                    <img src={pageInfo.domain + item.download_url} className="d-block w-100" style={{"opacity": "0.7"}} alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>{item.title}</h1>
                                        <button className="btn btn-outline-secondary" >See more</button>
                                    </div>
                                </div>
                        )}else {
                            return (
                                <div className="carousel-item" onClick={(e)=>{handleSelect(e, item)}}>
                                    <img src={pageInfo.domain + item.download_url} className="d-block w-100" style={{"opacity": "0.7"}} alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>{item.title}</h1>
                                        <button className="btn btn-outline-secondary" >See more</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {api.items.map(item=>item.selected && <CarouselDetail item={item} domain={pageInfo.domain}/>)}

        </div>
    )
};
export default CarouselImg