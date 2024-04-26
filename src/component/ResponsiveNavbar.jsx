import React, { useState, useEffect } from "react"
import { HashLink } from "react-router-hash-link"

export default function ResponsiveNavbar(){

    const [menuOpen, setMenuOpen] = useState(false)
    const [navHidden, setNavHidden] = useState(false)

    const handleScroll = () =>{
        const scrollPosition = window.scrollY;

        if(scrollPosition > 100){
            setNavHidden(true)
        } else {
            setNavHidden(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    return(
        <>
        {navHidden &&
            <div className="responsive-nav" onScroll={handleScroll}>
            <div className="menu-toggle">
            <button className="btn-open btn-recent" onClick={handleMenuOpen}>
                <i className="fa-solid fa-grip-lines"></i>
            </button>
            </div>

            {menuOpen && (
                <div className="menu-open">
                    <button className="btn-close btn-recent" onClick={handleMenuClose}><i className="ri-close-large-line"></i></button>
                    <div className="menu-nav">
                        <ul className="nav-links heading2">
                        <li><HashLink to="/#about">About</HashLink> </li>
                        <li><HashLink to="/#project">Work</HashLink> </li>
                        <li><HashLink to="/Contact">Contact</HashLink> </li>
                        </ul>
                    </div>
                    <div className="menu-contact">
                        <ul className="footer-links para-md">
                            <li><a href="#" >LinkedIn</a></li>
                            <li><a href="#" >Twitter</a></li>
                            <li><a href="#" >Instagram</a></li>
                            <li><a href="#" >Webflow</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
        }
            
        </>
    )
}
