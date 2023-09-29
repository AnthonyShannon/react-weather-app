import React, { Children, FC } from 'react';
import './Container.scss'
import { ContainerTypes } from '../../resources/interfaces';

const Container = ({children, size}: ContainerTypes) => {

    return (
        <div className={`container ${size && `container-${size}`}`}>
            {children}
        </div>
    )
}

export default Container;