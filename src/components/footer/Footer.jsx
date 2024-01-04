import styled from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlus, faBehance } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styled.container}>
            <li className={styled.shopi}>Shopi</li>
            <ul>
                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faGooglePlus} /></li>
                <li><FontAwesomeIcon icon={faBehance} /></li>
            </ul>
        </div>
    )
}
export default Footer;