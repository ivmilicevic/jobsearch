import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import categories from '../../config/categories';

export default class CategorySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOptions: []
        }
    }

    componentDidMount() {
        let dropdownOptions = [];
        if (categories) {
            let categoriesArray = categories
                .map(group => group.items);
            categoriesArray = [].concat.apply([], categoriesArray);

            dropdownOptions = categoriesArray.map(category => ({
                key: category,
                value: category,
                text: category
            }));

            this.setState({ dropdownOptions })
        }
    }

    handleAddition = (e, { value }) => {
        console.log(value);
        this.setState({
            dropdownOptions: [{ text: value, value, key: value }, ...this.state.dropdownOptions],
        })
    }

    render() {
        const { dropdownOptions } = this.state;

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
                closeOnChange
                deburr
                onAddItem={this.handleAddition}
                value={this.props.selectedCategories}
                onChange={this.props.categorySearchChangeHandler}
            />
        )
    }
}
