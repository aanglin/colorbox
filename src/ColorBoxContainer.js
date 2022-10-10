import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './ColorBoxContainer.css';

class ColorBoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'orange', 'blue', 'green', 'black', 'gold', 'silver', 'peach']
    };
render() {
    const boxes = Array.from({length:this.props.numBoxes}).map(
        () => ( <ColorBox  colors={this.props.allColors}/>
    ));
    return (
        <div className="ColorBoxContainer">{boxes}</div>
    )
}
}

export default ColorBoxContainer;