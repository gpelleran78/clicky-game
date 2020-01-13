import React from 'react';
import './FriendCard.css';

const FriendCard = (props) => {
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name: {props.name} </strong>
                    </li>
                    <li>
                        <strong>Occupation: {props.occupation} </strong>
                    </li>
                    <li>
                        <strong>Location: {props.location} </strong>
                    </li>
                </ul>
            </div>
            <span className="remove" onClick={(e) => { props.removeFriend(e, props.id) }}>
                x
            </span>
        </div>
    );
};

export default FriendCard;