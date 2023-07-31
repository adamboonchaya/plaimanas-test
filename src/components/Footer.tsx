import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className = 'footer-box'>
        <div className = 'footer-text'>
            <div className = 'footer-col'>
                <h5>ABOUT</h5>
                <a className= 'footer-link' href = '.components/pages/women'>Women</a>
                <a className= 'footer-link' href = '.components/pages/collections'>Collections</a>
                <a className= 'footer-link' href = '.components/pages/editoials'>Editorials</a>
                <a className= 'footer-link' href = '.components/pages/stories'>Stories</a>
            </div>
            <div className = 'footer-col'>
                <h5>HELP</h5>
                <a className= 'footer-link' href = '.components/pages/women'>Payment Notifcation</a>
                <a className= 'footer-link' href = '.components/pages/collections'>Customer Service</a>
                <a className= 'footer-link' href = '.components/pages/editoials'>FAQ</a>
            </div>
            <div className = 'footer-col'>
                <h5>SOCIAL</h5>
                <a className= 'footer-link' href = '.components/pages/women'>Instagram</a>
                <a className= 'footer-link' href = '.components/pages/collections'>Facebook</a>
            </div>
            <div className = 'footer-col'>
                <h5>LEGAL</h5>
                <a className= 'footer-link' href = '.components/pages/women'>Terms & Conditions</a>
                <a className= 'footer-link' href = '.components/pages/collections'>Privacy Policy</a>
                <a className= 'footer-link' href = '.components/pages/editoials'>Cookies Policy</a>
            </div>
            <div className = 'input-col'>
                <h5>NEWSLETTER</h5>
                <form>
                    <input type='text' value ='Email'></input>
                </form>
                <button className = 'subscribe-button'>
                    SUBSCRIBE
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer