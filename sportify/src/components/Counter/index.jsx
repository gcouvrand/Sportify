import React from "react";
import energy from "../../assets/energy.svg"
import chicken from "../../assets/chicken.svg"
import apple from "../../assets/apple.svg"
import cheeseburger from "../../assets/cheeseburger.svg"

/**
 *  Creates the counters and uses the datas from the API to add the correct values into it
 * 
 * @class
 * @params {data} the data needed for the counters
 * @returns the counters with the correct values in it
 */

export default class Counter extends React.Component {
    render() {
        const {data} = this.props

        return (
            <div className="counter">
                <div className="counter-wrapper">
                    <div className="icon-wrapper-energy"> 
                        <img src={energy} className="icon" alt="energy-icon"/>
                    </div>
                    <div className="counter-number-text">
                        <p className="counter-number">{data.calorieCount}kCal</p>
                        <p className="counter-text">Calories</p>
                    </div>
                </div>
                <div className="counter-wrapper">
                    <div className="icon-wrapper-chicken"> 
                        <img src={chicken} className="icon" alt="chicken-icon"/>
                    </div>
                    <div className="counter-number-text">
                        <p className="counter-number">{data.proteinCount}g</p>
                        <p className="counter-text">Protéines</p>
                    </div>
                </div>
                <div className="counter-wrapper">
                    <div className="icon-wrapper-apple"> 
                        <img src={apple} className="icon" alt="apple-icon"/>
                    </div>
                    <div className="counter-number-text">
                        <p className="counter-number">{data.carbohydrateCount}g</p>
                        <p className="counter-text">Glucides</p>
                    </div>
                </div>
                <div className="counter-wrapper">
                    <div className="icon-wrapper-cheeseburger"> 
                        <img src={cheeseburger} className="icon" alt="cheeseburger-icon"/>
                    </div>
                    <div className="counter-number-text">
                        <p className="counter-number">{data.lipidCount}g</p>
                        <p className="counter-text">Lipides</p>
                    </div>
                </div>
            </div>
        )
    }
}