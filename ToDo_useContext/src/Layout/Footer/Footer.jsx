import './Footer.css'
import { useContext } from 'react';

import ToggleContext from '../../Context/ToggleContext';


const Footer = () => {
  const { isToggleled } = useContext(ToggleContext);

    return (
        <footer className="footer">
        <small className="footer__description" >Made by: Dixie85</small>
        <small className="footer__description" >Copyright &#169; 2022 All Rights Reserved</small>
      </footer>
    )
};

export default Footer