import React, { Children, FC } from 'react';
import './Container.scss'
import { ContainerTypes } from '../../resources/interfaces';

const Container = ({  }: ContainerTypes) => {

    return (
        <div style={{ width: '100vw' }}>
            {/* {children} */}
        </div>
    )
}

export default Container;