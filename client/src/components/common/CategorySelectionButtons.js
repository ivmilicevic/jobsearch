import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class CategorySelectionButtons extends Component {
    render() {
        let buttons = [];
        if (this.props.selectedCategories) {
            buttons = this.props.selectedCategories
                .map(category => (
                    <Button
                        primary
                        style={{ margin: "5px" }}
                        key={category}
                    >
                        {category}
                        <Icon
                            name='close'
                            style={{ marginLeft: "5px" }}
                            onClick={() => this.props.removeCategoryHandler({ category })}
                        />
                    </Button>
                ));
        }
        return (
            <div>
                {buttons}
            </div>
        )
    }
}
