import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { header, desc } = this.props;

        if (!header) {
            return null;
        }

        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="descWrapper">
                    {desc}
                </p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: PropsTypes.string,
    desc: PropsTypes.string,
    tempArr: PropsTypes.arrayOf(PropsTypes.shape({
        fName: PropsTypes.string,
        lName: PropsTypes.string,
        email: PropsTypes.string,
        age: PropsTypes.number,
        onlineStatus: PropsTypes.bool
    }))
}

export default Headline;