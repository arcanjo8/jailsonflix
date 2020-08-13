import React from 'react';
import jailsonflix from '../../assets/img/jailsonflix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
	return(
        <nav className="Menu">
           <a href="/">
              <img className="jailsonflix" src={jailsonflix} alt="jailsonflix logo"/>
           </a>

           <Button as="a" className="ButtonLink" href="/">
              Novo vídeo
           </Button>
        </nav>
	);
}

export default Menu;