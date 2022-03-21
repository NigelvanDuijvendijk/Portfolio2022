import Link from 'next/link';
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () =>{
        if(theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/"><a className="navbar-brand">N</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/projecten">
                        <a className="nav-item nav-link">Projecten</a>
                    </Link>
                    <Link href="/technologieen">
                        <a className="nav-item nav-link">Technologieen</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-item nav-link">About</a>
                    </Link> 
                </div>
            </div>

            <div className="outerBtn">
                <button className="themeToggle" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={faLightbulb} />
                </button>
            </div>
        </nav>
    )
}