import React, {useState, useEffect} from "react";
import axios from 'axios';

const CarouselDetail = (props) => {
    useEffect(()=>{
        axios.get(props.domain + '/api/v2/pages/' + props.item.id)
            .then(res=>{
                console.log(res.data.cards);
                const newCards = res.data.cards;
                setCards(newCards)
            })
    },[]);

    const [cards, setCards] = useState(
        props.item.cards);

    return(
        <div className='text-dark' style={{"opacity": "0.8"}}>
            <div className="card mt-5 ">
                <h5 className="card-header">{props.item.title}</h5>

                <div className='container mb-5'>
                    <div className="card-body">
                        <h5 className="card-title">{props.item.subtitle}</h5>
                        <p className="card-text">{props.item.content}</p>
                    </div>

                    <div className="row">
                        {cards.map(card=><div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{card.value.title}</h5>
                                    <p className="card-text">{card.value.text}</p>
                                    <a href={card.value.button_url} className="btn btn-primary">Check more</a>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CarouselDetail