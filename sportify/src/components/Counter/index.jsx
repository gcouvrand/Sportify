import React from "react";
import PropTypes from "prop-types";


/**
 *  Creates the counters and uses the datas from the API to add the correct values into it
 * 
 * @class
 * @param {string} this.props.macroType - the macro's type for the className
 * @param {string} this.props.picture - the image's icon source URL
 * @param {number} this.props.macro - the value of the macro
 * @param {string} this.props.unit - the unit of the macro
 * @param {string} this.props.macroName - the name of the macro
 * @returns the counters with the correct values in it
 */

export default class Counter extends React.Component {
    render() {

        return (
                <div className="counter-wrapper">
                    <div className={'icon-wrapper-' + this.props.macroType}> 
                        <img src={this.props.picture} className="icon" alt="icon"/>
                    </div>
                    <div className="counter-number-text">
                        <p className="counter-number">{this.props.macro + this.props.unit}</p>
                        <p className="counter-text">{this.props.macroName}</p>
                    </div>
                </div>
        )
    }
}

Counter.propTypes = {
    macroType: PropTypes.string,
    picture: PropTypes.string,
    macro: PropTypes.number,
    unit: PropTypes.string,
    macroName: PropTypes.string,
  }