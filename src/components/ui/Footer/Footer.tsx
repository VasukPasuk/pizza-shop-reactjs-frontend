import './style.scss';
import {FaPizzaSlice, FaViber} from 'react-icons/fa6';
import {MdLocationOn, MdOutlineMail} from 'react-icons/md';
import {AiFillFacebook, AiFillPhone} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {BiLogoTelegram, BiLogoTwitter} from 'react-icons/bi';
import {useTheme} from '../../../hooks/useTheme.tsx';

function Footer() {
  const {theme} = useTheme();
  return (
    <footer
      id="footer_component"
      data-has-shadow={!(theme === 'light')}
    >
      <div className="footer-up">
        <div className="footer-column inform-col">
          <div className="footer-column-head">
            <FaPizzaSlice/>
            <span>PIZZA PARADISE</span>
          </div>
          <div className="footer-column-body">
            We offer the tastiest pizza from the freshest ingredients, prepared with love and
            delivered right to your doorstep. Order from us and enjoy real pizza.
          </div>
        </div>
        <div className="footer-column contacts-col">
          <div className="footer-column-head">Contacts</div>
          <ul className="footer-column-body">
            <li className="footer-contact-box">
              <MdLocationOn/>
              <span>st. Delicious, 12, city Kyiv </span>
            </li>
            <li className="footer-contact-box">
              <AiFillPhone/>
              <span>123-456-7890</span>
            </li>
            <li className="footer-contact-box">
              <MdOutlineMail/>
              <span>info@pizzaonline.com</span>
            </li>
          </ul>
        </div>
        <div className="footer-column links-col">
          <div className="footer-column-head">Useful links</div>
          <ul className="footer-column-body">
            <li className="footer-link-box">
              <Link to="/home">Home</Link>
            </li>
            <li className="footer-link-box">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="footer-link-box">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="footer-link-box">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column follow-col">
          <div className="footer-column-head">Follow us</div>
          <div className="footer-column-body">
            <BiLogoTelegram/>
            <FaViber/>
            <AiFillFacebook/>
            <BiLogoTwitter/>
          </div>
        </div>
      </div>
      <div className="footer-down">© 2024 Online Pizza Shop. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
