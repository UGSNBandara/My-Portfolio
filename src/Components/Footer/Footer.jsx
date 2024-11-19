import React from "react";
import './Footer.css'
import footer_logo from '../../assets/my_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div>
            <hr />
        <div className="footer">
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Sulitha Nulaksha. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Thank you for visiting me</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
