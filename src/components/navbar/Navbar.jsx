import styled from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlus, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faMagnifyingGlass, faBars, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className={styled.header}>
            <div className={styled.leftSide}>
                <li className={styled.shopi}>Shopi</li>
                <div className={styled.menu}>
                    <ul>
                        <li>
                            <Link to="/">
                                HOME
                            </Link>
                        </li>
                        <li>POST FORMATS</li>
                        <li>PAGES</li>
                        <li>
                            <Link to="/about">
                                ABOUT US
                            </Link>
                        </li>
                    </ul>
                    <div className={styled.mobileMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>

            <div className={styled.rightSide}>
                <div className={styled.socialIcon}>
                    <ul>
                        <li>
                            <Link to="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://support.google.com/answer/2451065?hl=en">
                                <FontAwesomeIcon icon={faGooglePlus} />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.behance.net/gallery/58902999/Login">
                                <FontAwesomeIcon icon={faBehance} />
                            </Link>
                        </li>
                    </ul>
                    <div className={styled.socialIconMobile}>
                        <FontAwesomeIcon icon={faShare} />
                    </div>
                </div>

                <ul>
                    <li className={styled.hasCirle}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </li>
                    <li>|</li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;