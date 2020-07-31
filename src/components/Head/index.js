import React from "react";
import { Header, Icon } from 'semantic-ui-react';

function Head() {
    return (
        <Header as='h1'>
            <Icon name='qrcode' />
            <Header.Content>
                ID-19
                <Header.Subheader>Call for Code Hackathon 2020</Header.Subheader>
            </Header.Content>
        </Header>   
    );
}

export default Head;
