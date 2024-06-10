import React from "react";
import logo from '../illustrations/gear.svg'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import fbIcon from '../icons/socialMediaIcons/icons8-facebook.svg'
import instagramIcon from '../icons/socialMediaIcons/icons8-instagram.svg'
import linkedINIcon from '../icons/socialMediaIcons/icons8-linkedin.svg'
import xIcon from '../icons/socialMediaIcons/icons8-twitterx.svg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerLogo">
                {/* <img src={logo} alt="footer logo" /> */}
            </div>
            <div className="usefullLinks set1">
                <div>
                    <div class="linksTitle">Amak</div>
                </div>
                <a href="/">
                    <p>Know us</p>
                </a>
                <a href="/">
                    <p>Our offers</p>
                </a>
                <a href="/">
                    <p>Our services</p>
                </a>
                <a href="/">
                    <p>Invest</p>
                </a>
                <a href="/">
                    <p>Blog</p>
                </a>
                <a href="/">
                    <p>- join the team</p>
                </a>

            </div>
            <div className="usefullLinks set2">
                <div>
                    <div class="linksTitle">Products</div>
                </div>
                <a href="/">
                    <p>Book an appointment</p>
                </a>
                <a href="/">
                    <p>Make deliveries</p>
                </a>
                <a href="/">
                    <p>Cities</p>
                </a>
                <a href="/">
                    <p>services</p>
                </a>
                <a href="/">
                    <p>Contact</p>
                </a>
            </div>
            <div className="usefullLinks set3">
                <div>
                    <div class="linksTitle">Services</div>
                </div>
                <a href="/">
                    <p>Mecanics</p>
                </a>
                <a href="/">
                    <p>Car wash</p>
                </a>
                <a href="/">
                    <p>Spare parts</p>
                </a>
                <a href="/">
                    <p>Cal vulcanizers</p>
                </a>
                <a href="/">
                    <p>Towing</p>
                </a>
            </div>
            <div className="socialMediaIcons">
                <div className="socialIconBox">
                    <Link to={'facebook.com'}>
                        <img src={fbIcon} alt="facebook Icon link" className="socialIcon" />
                    </Link>
                </div>
                <div className="socialIconBox">
                    <Link to={'instagram.com'}>
                        <img src={instagramIcon} alt="instagram Icon link" className="socialIcon" />
                    </Link>
                </div>
                <div className="socialIconBox">
                    <Link to={'x.com'}>
                        <img src={xIcon} alt="x Icon link" className="socialIcon" />
                    </Link>
                </div>
                <div className="socialIconBox">
                    <Link to={'linkedin.com'}>
                        <img src={linkedINIcon} alt="linkedIn Icon link" className="socialIcon" />
                    </Link>
                </div>
            </div>
        </div>

    )
}