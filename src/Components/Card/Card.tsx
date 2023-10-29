import React, { Children, FC } from 'react';
import './Card.scss'
import { CardTypes } from '../../resources/interfaces';

const Card = ({children, size, scrollable}: CardTypes) => {

    return (
        <div className={`card ${size && `card-${size}`} ${scrollable && 'card-scroll'}`}>
            {children}
        </div>
    )
}

export default Card;