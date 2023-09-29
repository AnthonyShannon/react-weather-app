import React, { Children, FC } from 'react';
import './Card.scss'
import { CardTypes } from '../../resources/interfaces';

const Container = ({children, size}: CardTypes) => {

    return (
        <div className={`card ${size && `card-${size}`}`}>
            {children}
        </div>
    )
}

export default Container;