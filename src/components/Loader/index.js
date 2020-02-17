import React from 'react';
import loadingSrc from '../../assets/loading.gif'

const Loader = props => (
    <div>
        <img src={loadingSrc} alt="loader icon" />
    </div>
);

export default Loader;