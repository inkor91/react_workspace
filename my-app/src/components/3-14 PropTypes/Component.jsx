import React from 'react';
import PropTypes from "prop-types";

function PropComponent(props) {
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "inkor",
    age: function (props, propName, componentName) {
        if (!/7/.test(props[propName])) {
            return new Error(
                'Invalid prop `' 
                + propName + 
                '` supplied to' +
                ' `' + componentName + 
                '`. Validation failed.'
            );
        }
    },
};

PropComponent.proTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

export default function Component() {
    return (
        <div>
            <PropComponent />
        </div>
    )
}
