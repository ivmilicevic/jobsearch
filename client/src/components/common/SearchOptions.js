import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import LocationSelector from './LocationSelector';
import CategorySearch from './CategorySearch';


export default class SearchOptions extends Component {
    render() {
        return (
            <Container style={{ paddingLeft: "14px" }}>
                <CategorySearch
                    selectedCategories={this.props.selectedCategories}
                    categorySearchChangeHandler={this.props.categorySearchChangeHandler} />
                <LocationSelector
                    locationChangeHandler={this.props.locationChangeHandler}
                    selectedLocation={this.props.selectedLocation}
                    radiusChangeHandler={this.props.radiusChangeHandler}
                    selectedRadius={this.props.selectedRadius}
                />
                <Button
                    positive
                    fluid
                    onClick={this.props.searchButtonHandler}
                >
                    Refresh
                 </Button>
            </Container>
        )
    }
}
