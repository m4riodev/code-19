import React, { Component } from "react";
import { 
    Header,
    Form,
    Input,
    Button,
    Checkbox,
    Message
} from 'semantic-ui-react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '',
            loading: false,
            registered: false,
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
            registered: false,
            submitted: false
        });
    }
  
    handleSubmit(e) {
        e.preventDefault();

        const { name, email } = this.state;

        this.setState({submitted: true});

        if(!(name && email)) return;

        this.setState({
            loading: true,
            registered: false
        });

        let that = this;

        setTimeout(function(){ 
            that.setState({
                loading: false,
                submitted: false,
                registered: true
            });
        }, 3000);
    }

    render() {
        const { name, email, registered, loading, submitted } = this.state;
        
        return (
            <>
                <Header as='h2'>
                    Cadastro
                    <Header.Subheader>
                        Olá, seja bem vindo ao ID-19...
                    </Header.Subheader>
                </Header>
                <p>Nunc eleifend ligula a eros iaculis, vitae placerat est vulputate. Donec ex arcu, porttitor eu tristique eu, consectetur eu elit.</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field
                        id='name'
                        control={Input}
                        label='Nome'
                        placeholder='Nome'
                        onChange={this.handleChange}
                        error={submitted && !name && 'O nome é obrigatório!'}
                    />
                    <Form.Field
                        id='email'
                        control={Input}
                        label='Email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        error={submitted && !email && 'O email é obrigatório!'}
                    />
                    <Form.Field
                        id='terms-and-condictions'
                        control={Checkbox}
                        label='Eu concordo com os Termos e Condições'
                    />
                    <Button type='submit' loading={loading} primary>Cadastrar</Button>
                    {registered && <Message positive>
                        <Message.Header>Cadastro efetuado!</Message.Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Message>}
                </Form>
            </>    
        ); 
    }
}

export default Register;
