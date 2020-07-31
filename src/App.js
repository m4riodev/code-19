import React from "react";
import {
    BrowserRouter as Router, 
    Switch,
    Route
} from 'react-router-dom';
import { 
    Container,
    Segment
} from 'semantic-ui-react';
import Head from './components/Head';
import Nav from './components/Nav';
import Register from './components/Register';
import About from './components/About';
import QrCode from './components/QrCode';
import ChatBot from './components/ChatBot';

function App() {
    return (
        <Router>
            <Container style={{padding: '10px 0 20px'}}>
                <Head />
                <Nav />
                <Segment style={{marginBottom: '20px'}}>
                    <Switch>
                        <Route path="/dandara" component={ChatBot} />
                        <Route path="/qrcode" component={QrCode} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Register} />
                    </Switch>
                </Segment>
            </Container>
        </Router>
    );
}

export default App;
