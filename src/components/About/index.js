import React from "react";
import { Header, Card, Image, Button } from 'semantic-ui-react';
import PhotoCarol from '../../assets/images/carolinerodrigues.jpg';
import PhotoJonatha from '../../assets/images/jotacarlosftb.jpg';
import PhotoMario from '../../assets/images/m4riodev.jpg';
import PhotoVinicius from '../../assets/images/viniciuscardoso.jpg';

function About() {
    return (
        <>
            <Header as='h2'>Quem Somos</Header>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={PhotoCarol}
                        />
                        <Card.Header>Carol Rodrigues</Card.Header>
                        <Card.Meta>UX/Design</Card.Meta>
                        <Card.Description>Fortaleza, CE</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button as='a' href='https://www.linkedin.com/in/annecarolinerodrigues' target='_blank' basic color='blue'>
                                Linkedin
                            </Button>
                            <Button as='a' href='https://github.com/AnneCaroline2209' target='_blank' basic color='black'>
                                GitHub
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={PhotoJonatha}
                        />
                        <Card.Header>Jonatha Carlos</Card.Header>
                        <Card.Meta>Back-end Developer</Card.Meta>
                        <Card.Description>Manaus, AM</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button as='a' href='https://linkedin.com/in/jonathacarlos-cnb' target='_blank' basic color='blue'>
                                Linkedin
                            </Button>
                            <Button as='a' href='https://github.com/JonathaCnB' target='_blank' basic color='black'>
                                GitHub
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={PhotoMario}
                        />
                        <Card.Header>Mário Araújo</Card.Header>
                        <Card.Meta>Front-end Developer</Card.Meta>
                        <Card.Description>Porto Alegre, RS</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button as='a' href='https://linkedin.com/in/m4riodev' target='_blank' basic color='blue'>
                                Linkedin
                            </Button>
                            <Button as='a' href='https://github.com/m4riodev' target='_blank' basic color='black'>
                                GitHub
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={PhotoVinicius}
                        />
                        <Card.Header>Vinicius Cardoso</Card.Header>
                        <Card.Meta>Business</Card.Meta>
                        <Card.Description>Parnamirim, RN</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button as='a' href='http://linkedin.com/in/viniciuscrds' target='_blank' basic color='blue'>
                                Linkedin
                            </Button>
                            <Button as='a' href='https://github.com/viniciuscrds' target='_blank' basic color='black'>
                                GitHub
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </>
    );
}

export default About;
