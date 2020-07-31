import React, {Component} from "react";
import { 
    Container, 
    Divider,
    Message 
} from 'semantic-ui-react';
import QRCode from "react-qr-code";
import Head from '../Head';

const items = [
    'Nullam dapibus rhoncus diam vel mollis. Cras et libero urna.',
    'Aenean sodales mattis neque eu porta. Nam imperdiet arcu et pellentesque aliquam.',
    'Cras hendrerit gravida laoreet. Phasellus ultrices consectetur augue in accumsan.',
    'Morbi eu nunc aliquam, mattis turpis a, varius sem.'
];

class QrCodeToPrint extends Component {
    render() {
        return (
            <div style={{padding: '30px 20px'}}>
                <Head />
                <Divider />
                <Container textAlign='center' style={{padding: '30px 0'}}>
                    <QRCode value={this.props.address} size="400" /> 
                </Container>
                <Divider />
                <Message>
                    <Message.Header>{this.props.value}</Message.Header>
                    <Message.List items={items} />
                </Message>
            </div>
        );
    }
}

export default QrCodeToPrint;
