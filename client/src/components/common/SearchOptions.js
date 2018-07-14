import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import CategorySelectionButtons from './CategorySelectionButtons';
import LocationSelector from './LocationSelector';
import CategorySearch from './CategorySearch';


export default class SearchOptions extends Component {
    render() {


        return (
            <Container style={{ paddingLeft: "14px" }}>
                <CategorySearch />
                <LocationSelector />
                <CategorySelectionButtons />
                <Button positive fluid>Refresh</Button>
            </Container>
        )
    }
}
