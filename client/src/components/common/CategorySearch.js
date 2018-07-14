import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class CategorySearch extends Component {
    render() {
        const dropdownOptions = [
            {
                key: 'designer',
                value: 'designer',
                text: 'designer'
            },
            {
                key: 'developer',
                value: 'developer',
                text: 'developer'
            },
            {
                key: 'manager',
                value: 'manager',
                text: 'danager'
            }
        ];

        return (
            <Dropdown
                placeholder='Search...'
                multiple
                search
                selection
                options={dropdownOptions}
                fluid
                allowAdditions
                additionLabel='Add: '
                style={{ marginBottom: "10px" }}
            />
        )
    }
}
