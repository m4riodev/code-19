import React, {Component} from "react";
import { 
    Header,
    Form,
    Input,
    Button,
    Progress,
    Divider,
    Container
} from 'semantic-ui-react';
import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';
import QrCodeToPrint from './QrCodeToPrint';

class QrCode extends Component {
    constructor() {
        super();
        this.state = {
            place: '', 
            address: '',
            loading: false,
            created: false,
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { id, value } = e.target;
        this.setState({ 
            [id]: value,
            loading: false,
            created: false,
            submitted: false
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();

        const { place, address } = this.state;

        this.setState({submitted: true});

        if(!(place && address)) return;

        this.setState({
            loading: true,
            created: false
        });

        let that = this;

        setTimeout(function(){ 
            that.setState({
                loading: false,
                submitted: false,
                created: true
            });
        }, 3000);
    }

    render() {
        const { place, address, created, loading, submitted } = this.state;

        return (
            <>
                <Header as='h2'>
                    QR Code
                    <Header.Subheader>
                        Preencha os dados da localização do QR Code.
                    </Header.Subheader>
                </Header>
                <Form onSubmit={this.handleSubmit} style={{marginBottom: '20px'}}>
                    <Form.Field
                        id='place'
                        control={Input}
                        label='Nome'
                        placeholder='Nome'
                        value={place} 
                        onChange={this.handleChange}
                        error={submitted && !place && 'O nome é obrigatório!'}
                    />
                    <Form.Field
                        id='address'
                        control={Input}
                        label='Endereço'
                        placeholder='Endereço'
                        value={address} 
                        onChange={this.handleChange}
                        error={submitted && !address && 'O endereço é obrigatório!'}
                    />
                    <Button type='submit' loading={loading} primary>Gerar QR Code</Button>
                </Form>
                {loading && 
                    <>
                        <Divider />
                        <Progress percent={60} color='green' active progress style={{margin: '100px 0'}}>
                            Gerando QR Code...
                        </Progress>
                    </>
                }
                {created && 
                    <>
                        <Divider style={{marginBottom: '30px'}} />
                        <Container textAlign='center'>
                            <QRCode value={`${window.location.origin}?n=${place}&a=${address}`} />
                        </Container>
                        <Divider style={{marginTop: '30px'}} />
                        <ReactToPrint
                            trigger={() => {
                                return <Button type='button' primary>Imprimir</Button>;
                            }}
                            content={() => this.componentRef}
                        />
                        <div style={{ display: "none" }}><QrCodeToPrint ref={el => (this.componentRef = el)} address={`${window.location.origin}?n=${place}&a=${address}`}  value={`${place} - ${address}`} /></div>
                    </>
                }
            </>
        );
    }
}

export default QrCode;
