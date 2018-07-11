import React, { Component } from 'react';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import exampleImage from './architectural-design-architecture-building-443383.jpg';

const headerStyle = {
    height: "250px",
    width: "auto",
    backgroundImage: `url(${exampleImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",

}

const titleStyle = {
    position: "absolute",
    bottom: "50px",
    left: "50px",
    fontSize: "36px",
    color: "#fff"
}

export default class DetailView extends Component {

    render() {
        let descriptionHTML = {
            __html: ""
        };
        let job = {};
        if (this.props.descriptionHTML) {
            descriptionHTML = this.props.descriptionHTML;
        }
        if (this.props.job) {
            job = this.props.job;
        }
        return (
            <div style={{ marginRight: "15px" }}>
                <Container fluid>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>{job.company}</h1>
                    </div>
                </Container>

                <Container textAlign='justified'>
                    <Button.Group widths='3' style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <Button color="blue">Position</Button>
                        <Button>Other Position</Button>
                        <Button>About Company</Button>
                    </Button.Group>
                    <Divider />
                    <Header as='h1' textAlign='center'>
                        {job.title}
                    </Header>
                    <Divider />
                    <div dangerouslySetInnerHTML={descriptionHTML}></div>

                </Container>
            </div>
        )
    }
}
