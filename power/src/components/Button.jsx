import React from 'react'
import '../styles/Button.css'
import {motion} from 'framer-motion'

function Button({value, size, style, onClick}) {
    const styleValue = ['fill', 'outline'];
    const sizeValue = ['small', 'medium', 'large'];

    if (!styleValue.includes(style)) {
        style = styleValue[0]; // valeur par défaut
    }

    if (!sizeValue.includes(size)) {
        size = sizeValue[0]; // valeur par défaut
    }

    const getClasses = () => {
        return 'button_container ' + size + ' ' + style;
    }

    return ( 
        <div 
            className={getClasses()}
            onClick={onClick}
        >
            <span>{value}</span>
        </div>
     );
}

export default Button;