import React, { Children, FC } from 'react';
import './Card.scss'
import { ContainerTypes } from '../../resources/interfaces';

const Container = ({children}: ContainerTypes) => {

    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default Container;