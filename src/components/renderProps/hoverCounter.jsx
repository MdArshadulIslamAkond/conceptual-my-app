import React from 'react';

export default class HoverCounter extends React.Component {
   
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}> Hovered {count} Times</h1>
            </div>
        );
    }
}