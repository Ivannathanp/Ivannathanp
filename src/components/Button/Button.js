import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['button--Primary', 'button--Outline', 'button--More']
const SIZES = ['button--Medium', 'button--Large']

export const Button = ({ children, buttonStyle, buttonSize, onClick, type }) => 
{ 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
            <button className='buttonMain'
                className={`button ${checkButtonStyle} ${checkButtonSizes}`} 
                onClick={onClick} type={type}>
                {children}
            </button>
    );
 };