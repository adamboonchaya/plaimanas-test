import React, { useState, useEffect  } from 'react'
import DropDown from './DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './Nav.css'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import logo from './pages/logo.png';

const Nav: React.FC <{}> = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [logoWidth, setLogoWidth] = useState(100);
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxWidth = 100;
            
            if (scrolled <= 720) {
                const newWidth = maxWidth - scrolled/8;
                setLogoWidth(newWidth);
            }
            else {
                setLogoWidth(10);
            }
        
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <>
        <div className = 'navbar'>
            <div>
                <select className = 'currency-selector'>
                    <option selected value="thb">TH - THB ▾</option>
                    <option value="usd">US - USD ▾</option>
                </select>
            </div>

            <div>
                <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
                    <li className = 'nav-items'>
                        <Link to="/women" className='nav-links' onClick={closeMobileMenu}> WOMEN </Link>
                    </li>

                    <li className = 'nav-items'>
                        <Link to="/collections" className='nav-links' onClick={closeMobileMenu}> COLLECTIONS </Link>
                    </li>

                    <li className = 'nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link to="#" id = 'editorial-text' className='nav-links' onClick={closeMobileMenu}> EDITORIAL
                            {dropdown && <DropDown />}
                        </Link>
                    </li>

                    <li className = 'nav-items'>
                        <Link to="/news" className='nav-links' onClick={closeMobileMenu}> NEWS </Link>
                    </li>

                    <li className = 'nav-items'>
                        <Link to="/stories" className='nav-links' onClick={closeMobileMenu}> STORIES </Link>
                    </li>
                </ul>
                {dropdown && <div className = 'overlay'></div>}
            </div>

            <div>
                <button type="button">
                    SIGN IN
                </button>
                <button type="button">
                    <FontAwesomeIcon icon={faBasketShopping} />
                </button>
            </div>
        </div>
        <div className = 'logo-container'>
            <img className = 'main-logo' src={logo} alt="Logo" style={{ width: `${logoWidth}vw` }}/>
        </div>
    </>
    )
}

export default Nav