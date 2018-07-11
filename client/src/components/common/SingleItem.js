import React, { Component } from 'react';
import { Icon, Card, Image, Grid } from 'semantic-ui-react';
import nsoftLogo from './nsoft_logo.jpg';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';


export default class SingleItem extends Component {
    render() {
        let job = {};
        if (this.props.job) {
            job = this.props.job;
        }

        // Set up for javascript-time-ago library
        TimeAgo.locale(en);
        const timeAgo = new TimeAgo('en-US');


        return (
            <Card fluid style={{ maxHeight: "500px", marginBottom: "15px" }} onClick={(e) => console.log(e)} >
                <Card.Content>
                    <Image floated='left' size='mini' src={nsoftLogo} />
                    <Card.Header>{job.title}</Card.Header>
                    <Card.Meta>{job.company} </Card.Meta>
                    <Card.Description>
                        {job.snippet}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Grid>
                        <Grid.Column floated='left' width={5}>
                            <Icon name='map marker alternate' />
                            {job.location}
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Icon name='clock outline' />
                            {timeAgo.format(Date.parse(job.updated))}
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card >
        )
    }
}
