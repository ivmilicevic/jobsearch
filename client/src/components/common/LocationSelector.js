import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import locations from '../../config/locations';


export default class LocationSelector extends Component {
    render() {
        const locationDropdownOptions = locations.map(city => ({
            key: city,
            value: city,
            text: city
        }));

        const distanceDropdownOptions = [
            {
                key: 0,
                value: 0,
                text: 'Exact location'
            },
            {
                key: 8,
                value: 8,
                text: '8 km'
            },
            {
                key: 16,
                value: 16,
                text: '16 km'
            },
            {
                key: 24,
                value: 24,
                text: '24 km'
            }, {
                key: 40,
                value: 40,
                text: '40 km'
            }
        ]

        return (
            <Container >
                <Dropdown
                    placeholder='Location'
                    search
                    selection
                    options={locationDropdownOptions}
                    fluid
                    style={{ marginBottom: "10px" }}
                    value={this.props.selectedLocation}
                    onChange={this.props.locationChangeHandler} />
                <Dropdown
                    placeholder='Distance'
                    selection
                    options={distanceDropdownOptions}
                    fluid
                    style={{ marginBottom: "10px" }}
                    value={this.props.selectedRadius}
                    onChange={this.props.radiusChangeHandler}
                />
            </Container>
        )
    }
}