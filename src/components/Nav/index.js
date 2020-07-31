import React from "react";
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Nav() {
    return (
        <Menu as="nav" pointing secondary>
            <Menu.Item
                as={NavLink}
                to='/'
                exact
                name='Cadastro'
            />
            <Menu.Item
                as={NavLink}
                to='/qrcode'
                name='QR Code'
            />
            <Menu.Item
                as={NavLink}
                to='/about'
                name='Quem Somos'
            />
        </Menu>   
    );
}

export default Nav;
