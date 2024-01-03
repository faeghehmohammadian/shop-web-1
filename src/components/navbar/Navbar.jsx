import styled from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlus, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faMagnifyingGlass, faBars, faShare } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className={styled.header}>
            <div className={styled.leftSide}>
                <li className={styled.shopi}>Shopi</li>
                <div className={styled.menu}>
                    <ul>
                        <li>HOME</li>
                        <li>POST FORMATS</li>
                        <li>PAGES</li>
                        <li>PURCHASE</li>
                    </ul>
                    <div className={styled.mobileMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

            </div>

            <div className={styled.rightSide}>
                <div className={styled.socialIcon}>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faGooglePlus} /></li>
                        <li><FontAwesomeIcon icon={faBehance} /></li>
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