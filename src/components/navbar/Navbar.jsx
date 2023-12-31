import styled from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlus, faBehance} from '@fortawesome/free-brands-svg-icons';
import {faBagShopping,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';  
//import { faPipe } from '@fortawesome/pro-solid-svg-icons';
function Navbar() {
    return (
        <div className={styled.header}>
            <div className={styled.leftSide}>
                <ul>
                    <li style={{ color: 'blue' , fontSize: '20px', fontWeight: 'bold' , marginRight:"40px"}}>Shopi</li>
                    <li>HOME</li>
                    <li>POST FORMATS</li>
                    <li>PAGES</li>
                    <li>PURCHASE</li>
                </ul>
            </div>

            <div className={styled.rightSide}>
                <ul>
                    <li> <FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faGooglePlus} /></li>
                    <li><FontAwesomeIcon icon={faBehance} /></li>
                </ul>
                <ul>
                    <li className='has-circle'> <FontAwesomeIcon icon={faBagShopping} /></li>
                    <li>|</li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;