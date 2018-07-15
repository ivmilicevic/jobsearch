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
                    dropdownChangeHandler={this.props.dropdownChangeHandler} />
                <LocationSelector
                    dropdownChangeHandler={this.props.dropdownChangeHandler}
                    selectedLocation={this.props.selectedLocation}
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
