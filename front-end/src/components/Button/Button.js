// Button.js
import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ButtonStyle.css';

const ThemeSwitchButton = () => {
    const [ theme, setTheme ] = useState( 'light' );

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme( newTheme );
    };

    useEffect( () => {
        if ( theme === 'light' ) {
            document.documentElement.classList.add( 'light' );
            document.documentElement.classList.remove( 'dark' );
        } else {
            document.documentElement.classList.add( 'dark' );
            document.documentElement.classList.remove( 'light' );
        }
    }, [ theme ] );

    return (
        <button className="mode-switch" title="Switch Theme" onClick={ handleThemeChange }>
            <i className={ `bi ${ theme === 'light' ? 'bi-moon' : 'bi-sun' }` }></i>
        </button>
    );
};

export default ThemeSwitchButton;
