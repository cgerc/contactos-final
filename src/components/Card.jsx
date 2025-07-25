import { useState, useEffect } from "react";




const Card = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    
    return (
        <ul className="list-group">
            <li className="list-group-item" ><a><img src="https://via.placeholder.com/150" className="card-img-top imagen" />
                <i className="fa-solid fa-location-dot"></i>
                <i className="fa-solid fa-phone"></i>
                <i className="fa-solid fa-envelope"></i>
                <i className="fa-solid fa-pen"></i>
                <i className="fa-solid fa-trash"></i>
            </a></li>
        </ul>
    )
};
export default Card;