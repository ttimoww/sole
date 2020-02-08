import React from 'react';
import {ReactComponent as SpinnerIcon} from './loader.svg'

const Spinner = () => {
    return ( 
        <div className="spinner">
            <SpinnerIcon  />
        </div>
     );
}
 
export default Spinner;